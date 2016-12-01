var path = require('path');
var shell = require('shelljs');
var chalk = require('chalk');
var semver = require('semver');
var dateFormat = require('dateformat');
const packageJson = require('../package.json');

const ref = shell.exec('npm view --json', { silent: true });
if (ref.code === 0) {
  const data = JSON.parse(ref.stdout);
  const lastVersion = data.version;
  const lastName = data.name;
  const lastPublish = data.time[lastVersion];
  const maintainers = data.maintainers.reduce((str, val) => `${str}, ${val}` );

  if (lastVersion === packageJson.version) {
    shell.echo(chalk.bold(`\n${packageJson.name}@${packageJson.version}`));
    shell.echo(chalk.grey('was published to NPM at ' + dateFormat(lastPublish, 'dd-mmm-yyyy, HH:MM')));

  } else {
    const diff = semver.diff(lastVersion, packageJson.version);
    const verColor = diff.match(/major/) ? 'red' : diff.match(/minor/) ? 'yellow' : 'bold';

    shell.echo(chalk.grey('\nthe current version: ') + chalk.white(`${packageJson.name}`) + chalk[verColor](`@${packageJson.version}`));
    shell.echo(chalk.grey('the latest published version: ') + chalk.white(`${lastName}@${lastVersion}`));
    shell.echo(
      chalk.grey('was published to NPM at ') +
      chalk.white(dateFormat(lastPublish, 'dd-mmm-yyyy, HH:MM')) +
      chalk.grey(` by ${maintainers}`)
    );
  }
} else {
  if ( ref.stderr.match('npm ERR! code E404')) {
    shell.echo(chalk.bold(`\n${packageJson.name}@${packageJson.version}`));
    shell.echo(chalk.grey('wasn\'t published to NPM yet'));
  } else {
    console.log(ref.stderr);
  }
}
