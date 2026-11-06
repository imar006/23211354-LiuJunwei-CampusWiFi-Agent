param([int]$Port = 8765)
Set-Location $PSScriptRoot
$pythonCommand = 'python'
if (Test-Path '.venv/Scripts/python.exe') { $pythonCommand = "$PSScriptRoot\.venv\Scripts\python.exe" }
elseif (Test-Path '.runtime') {
    $bundledPython = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
    if (Test-Path $bundledPython) { $pythonCommand = $bundledPython }
    $env:PYTHONPATH = "$PSScriptRoot\.runtime;$PSScriptRoot"
}
& $pythonCommand -m uvicorn backend.app:app --host 127.0.0.1 --port $Port
