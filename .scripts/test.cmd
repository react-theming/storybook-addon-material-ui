@echo off
call .\node_modules\.bin\mocha --require .scripts/mocha_runner src/**/tests/**/*.js
rem Please no errors

