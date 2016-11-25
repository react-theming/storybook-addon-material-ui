var shell = require('shelljs');
var chalk = require('chalk');
const packageJson = require('../package.json');

shell.echo(chalk.grey(`${packageJson.name}@${packageJson.version} was successfully published.`));
