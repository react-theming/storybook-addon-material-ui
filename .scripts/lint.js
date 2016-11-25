const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

require('./ver');

const lint = ['node_modules', '.bin', 'eslint'].join(path.sep);
const args = `src --ext .jsx,.js --color ${process.argv[2] || ''}`;
const cmd = `${lint} ${args}`;

shell.echo(chalk.gray(cmd));
shell.exec(cmd);
