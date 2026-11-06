param([int]$Port = 8765)
$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
try {
    $pythonCommand = $null
    if (Test-Path -LiteralPath '.venv/Scripts/python.exe') { $pythonCommand = Join-Path $PSScriptRoot '.venv/Scripts/python.exe' }
    if (-not $pythonCommand) {
        $bundledPython = Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe'
        if (Test-Path -LiteralPath $bundledPython) { $pythonCommand = $bundledPython }
    }
    if (-not $pythonCommand) {
        foreach ($candidate in @('python', 'python3')) {
            $found = Get-Command $candidate -ErrorAction SilentlyContinue
            if ($found) {
                & $found.Source -c "import sys; assert sys.version_info >= (3, 10)" 2>$null
                if ($LASTEXITCODE -eq 0) { $pythonCommand = $found.Source; break }
            }
        }
    }
    if (-not $pythonCommand) { throw 'Python 3.10+ is required. Install Python, then double-click the CMD launcher again.' }
    & $pythonCommand (Join-Path $PSScriptRoot 'launch.py') --port $Port
    exit $LASTEXITCODE
} catch {
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
