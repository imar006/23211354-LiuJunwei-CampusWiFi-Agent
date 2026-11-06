@echo off
setlocal
cd /d "%~dp0"
if exist "%~dp0WiFiMVP.exe" (
  "%~dp0WiFiMVP.exe"
) else (
  powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start.ps1"
)
if errorlevel 1 (
  echo.
  echo Startup failed. Please read the error above or startup.log.
  pause
)
