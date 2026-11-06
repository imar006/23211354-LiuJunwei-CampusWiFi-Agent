"""Install isolated runtime dependencies and open the local application."""
from pathlib import Path
import argparse
import json
import os
import subprocess
import sys
import threading
import time
import urllib.request
import webbrowser

ROOT = Path(__file__).resolve().parent

def health(url):
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
    if not 1 <= args.port <= 65535:
        parser.error("Port must be between 1 and 65535")
    os.chdir(ROOT)
    url = f"http://127.0.0.1:{args.port}"
    if health(url):
        print("The application is already running: " + url, flush=True)
        if not args.no_browser:
            webbrowser.open(url)
        return 0
    env_python = ROOT / ".venv" / ("Scripts/python.exe" if os.name == "nt" else "bin/python")
    if Path(sys.executable).resolve() != env_python.resolve():
        if not env_python.exists():
            print("First launch: creating an isolated Python environment...", flush=True)
            subprocess.run([sys.executable, "-m", "venv", str(ROOT / ".venv")], check=True)
        return subprocess.call([str(env_python), str(Path(__file__).resolve()), *sys.argv[1:]])
    check = subprocess.run([sys.executable, "-c", "import fastapi, uvicorn, httpx, pydantic"], capture_output=True)
    if check.returncode:
        print("Installing dependencies. Internet is required on the first launch...", flush=True)
        subprocess.run([sys.executable, "-m", "pip", "install", "--disable-pip-version-check", "-r", str(ROOT / "requirements.txt")], check=True)
    if not args.no_browser:
        def open_when_ready():
            for _ in range(60):
                if health(url):
                    webbrowser.open(url)
                    return
                time.sleep(0.5)
            print("Browser was not opened. Check server errors above.", flush=True)
        threading.Thread(target=open_when_ready, daemon=True).start()
    print("Opening " + url + " ; keep this window open. Ctrl+C stops the server.", flush=True)
    import uvicorn
    uvicorn.run("backend.app:app", host="127.0.0.1", port=args.port)
    return 0

if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (subprocess.CalledProcessError, OSError) as error:
        print("Startup failed: " + str(error), file=sys.stderr)
        print("Check Python installation and network access, or follow README.md.", file=sys.stderr)
        raise SystemExit(1)
