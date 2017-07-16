const shell = require('shelljs');
const chalk = require('chalk');

shell.exec('nodemon src -e js,jsx,json --exec "npm run status"');
