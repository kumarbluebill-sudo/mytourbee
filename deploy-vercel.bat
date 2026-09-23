@echo off
echo ========================================================
echo   Deploying My TourBee to Vercel
echo ========================================================
echo.
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"

echo Running Vercel deployment...
echo (If you are not logged in, your browser will open to authenticate)
echo.
call npx vercel --prod

echo.
pause
