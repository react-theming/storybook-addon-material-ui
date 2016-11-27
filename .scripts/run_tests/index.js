const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

const mocha = ['node_modules', '.bin', 'mocha'].join(path.sep);

const args = [
  '--require .scripts/run_tests/mocha_runner',
  'src/**/tests/**/*.js',
  '--colors',
].join(' ');

const cmd = `${mocha} ${args}`;

shell.echo(chalk.gray(cmd));
shell.exec(cmd);
