const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

const isMin = process.argv.includes('-R') && process.argv.includes('min');
const mocha = ['node_modules', '.bin', 'mocha'].join(path.sep);

const args = [
  '--require .scripts/run_tests/mocha_runner',
  'src/**/tests/**/*.js',
  '--colors',
  ...process.argv.slice(2),
].join(' ');

const cmd = `${mocha} ${args}`;

shell.echo(`${isMin ? '\nMocha:\n' : ''}${chalk.grey(cmd)}`);
shell.exec(cmd);
