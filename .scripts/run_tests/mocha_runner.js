// This is an auto generated file with React CDK.

require('babel-core/register');
require('babel-polyfill');

// pass images
require.extensions['.svg'] = function(){ return null; }
require.extensions['.png'] = function(){ return null; }
require.extensions['.gif'] = function(){ return null; }
require.extensions['.jpg'] = function(){ return null; }


var packageJson = require('../../package.json');

// Add jsdom support, which is required for enzyme.
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

// Add packageJson to have it accessible from any folder
global.packageJson = packageJson;

process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});

