var path = require('path');
var shell = require('shelljs');
var chalk = require('chalk');
var babel = ['node_modules', '.bin', 'babel'].join(path.sep);

shell.echo(chalk.blue('Package was published'))
