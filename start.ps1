param([int]$Port = 8765)
$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
try {
    if (Test-Path -LiteralPath (Join-Path $PSScriptRoot 'WiFiMVP.exe')) {
        & (Join-Path $PSScriptRoot 'WiFiMVP.exe') --port $Port
        exit $LASTEXITCODE
    }
    $candidates = @((Join-Path $PSScriptRoot '.venv/Scripts/python.exe'))
    foreach ($name in @('python','python3','py')) {
        $found = Get-Command $name -ErrorAction SilentlyContinue
        if ($found) { $candidates += $found.Source }
    }
    $candidates += (Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe')
    $pythonCommand = $null
    foreach ($candidate in $candidates) {
        if (-not (Test-Path -LiteralPath $candidate)) { continue }
        $probe = Start-Process -FilePath $candidate -ArgumentList @('-c','"import sys; assert sys.version_info >= (3, 10)"') -WindowStyle Hidden -Wait -PassThru
        if ($probe.ExitCode -eq 0) { $pythonCommand = $candidate; break }
    }
    if (-not $pythonCommand) { throw 'No usable Python 3.10+. Use the full ZIP with WiFiMVP.exe, or install Python.' }
    & $pythonCommand (Join-Path $PSScriptRoot 'launch.py') --port $Port
    exit $LASTEXITCODE
} catch {
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
