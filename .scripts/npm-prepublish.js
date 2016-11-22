var path = require('path');
var shell = require('shelljs');
var chalk = require('chalk');
var babel = ['node_modules', '.bin', 'babel'].join(path.sep);

shell.echo(chalk.blue('Transpiling \'src\' into ES5 ...'));
shell.echo('');

shell.rm('-rf', 'dist');
shell.exec(babel + ' --ignore tests,stories,story.jsx src --out-dir dist');

shell.echo('');
shell.echo(chalk.blue('Transpiling completed.'));
shell.echo('');
