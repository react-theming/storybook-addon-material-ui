@echo off
call .\node_modules\.bin\eslint %1 --ext .jsx --ext .js %2
rem Please no errors
