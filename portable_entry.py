"""Windows packaged entry. Uses external project data beside the executable."""
import argparse
import importlib
import json
import os
from pathlib import Path
import socket
import sys
import threading
import time
import traceback
import urllib.request
import webbrowser

def healthy(url):
    try:
        with urllib.request.urlopen(url + "/health", timeout=1) as response:
            return json.load(response).get("service") == "wifi-investigation"
    except Exception:
        return False

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8765)
    parser.add_argument("--no-browser", action="store_true")
    args = parser.parse_args()
    if not 1 <= args.port <= 65515:
        parser.error("Port must be between 1 and 65515")
    root = Path(sys.executable).resolve().parent if getattr(sys, "frozen", False) else Path(__file__).resolve().parent
    os.chdir(root)
    required = ["data/observations.json", "frontend/index.html", "skills/wifi-investigation/SKILL.md"]
    for relative in required:
        if not (root / relative).is_file():
            raise RuntimeError("Missing " + relative + ". Extract the WHOLE ZIP before launching.")
    for port in range(args.port, args.port + 20):
        url = f"http://127.0.0.1:{port}"
        if healthy(url):
            print("Already running: " + url, flush=True)
            if not args.no_browser:
                webbrowser.open(url)
            return
        try:
            with socket.socket() as sock:
                sock.bind(("127.0.0.1", port))
            break
        except OSError:
            continue
    else:
        raise RuntimeError("No free local port. Close other instances and try again.")
    import src.tools as tools
    tools.ROOT = root
    import src.engine as engine
    engine.ROOT = root
    api = importlib.import_module("backend.app")
    api.ROOT = root
    if not args.no_browser:
        def open_browser():
            for _ in range(120):
                if healthy(url):
                    webbrowser.open(url)
                    return
                time.sleep(0.5)
        threading.Thread(target=open_browser, daemon=True).start()
    print("Local MVP: " + url + " ; keep this window open. Ctrl+C stops the server.", flush=True)
    print("Demo and saved experiments work offline. Online LLM mode requires your own model configuration.", flush=True)
    import uvicorn
    uvicorn.run(api.app, host="127.0.0.1", port=port, loop="asyncio", http="h11", ws="none")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        pass
    except Exception:
        message = traceback.format_exc()
        print(message, file=sys.stderr)
        root = Path(sys.executable).resolve().parent if getattr(sys,"frozen",False) else Path(__file__).resolve().parent
        try:
            (root / "startup.log").write_text(message,encoding="utf-8")
        except OSError:
            pass
        raise SystemExit(1)
