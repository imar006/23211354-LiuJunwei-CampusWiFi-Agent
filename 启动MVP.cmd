@echo off
setlocal
cd /d "%~dp0"
if exist ".venv\Scripts\python.exe" (
  ".venv\Scripts\python.exe" -m uvicorn backend.app:app --host 127.0.0.1 --port 8765
) else if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" (
  set "PYTHONPATH=%~dp0.runtime;%~dp0"
  "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m uvicorn backend.app:app --host 127.0.0.1 --port 8765
) else (
  python -m uvicorn backend.app:app --host 127.0.0.1 --port 8765
)
pause
