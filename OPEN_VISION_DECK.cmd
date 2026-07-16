@echo off
cd /d "%~dp0"
powershell -NoProfile -WindowStyle Hidden -Command "Start-Process -FilePath 'node' -ArgumentList 'scripts\vision-deck-server.mjs','--open' -WorkingDirectory '%~dp0' -WindowStyle Hidden"
exit /b 0
