#!/bin/bash

./node_modules/.bin/mocha --require .scripts/mocha_runner src/**/tests/**/*.js --watch --watch-extensions jsx

