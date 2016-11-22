var path = require('path');
var shell = require('shelljs');
var chalk = require('chalk');
var lint = ['node_modules', '.bin', 'eslint'].join(path.sep);

shell.exec(lint + ' src --ext .jsx,.js --fix');
