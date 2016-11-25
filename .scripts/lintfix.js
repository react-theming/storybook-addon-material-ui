const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

const lint = ['node_modules', '.bin', 'eslint'].join(path.sep);
const args = `src --ext .jsx,.js --fix --color ${process.argv}`;
const cmd = `${lint} ${args}`;

shell.echo(chalk.yellow(cmd));
shell.echo(chalk.yellow(process.argv));
shell.exec(cmd);
