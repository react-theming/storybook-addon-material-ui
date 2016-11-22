@echo off

setlocal enabledelayedexpansion

set GIT_URL_CMD=git config --get remote.origin.url
for /F "usebackq delims=" %%v in (`%GIT_URL_CMD%`) do set GIT_URL=%%v

if %GIT_URL%=="" (
	echo This project is not configured with a remote git repo
	exit 1
)

if exist .out (	
	rmdir /S /Q .out
)

md .out
	
call build-storybook -o .out

cd .out

git init
git config user.name "GH Pages Bot"
git config user.email "windows@ghbot.com"
git add . 
git commit -m "Deploy Storybook to GitHub Pages" 
git push --force --quiet  !GIT_URL! master:gh-pages 

cd ..
rmdir /S /Q .out

set GHP_URL_CMD=node .scripts/get_gh_pages_url.js !GIT_URL!
for /F "usebackq delims=" %%w in (`%GHP_URL_CMD%`) do set GHP_URL=%%w

echo ## Deploy >storybook.md
echo Storybook deployed to: [!GHP_URL!](!GHP_URL!)>>storybook.md

echo .
echo Storybook deployed to: !GHP_URL! 
echo See the %cd%\storybook.md

endlocal