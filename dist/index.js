'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _register = require('./register');

Object.defineProperty(exports, 'register', {
  enumerable: true,
  get: function get() {
    return _register.register;
  }
});

var _muiTheme = require('./muiTheme');

Object.defineProperty(exports, 'muiTheme', {
  enumerable: true,
  get: function get() {
    return _muiTheme.muiTheme;
  }
});
// note: addons, panels and events get unique names using a prefix
var ADDON_ID = exports.ADDON_ID = 'sm/storybook-addon-material-ui';
var PANEL_ID = exports.PANEL_ID = ADDON_ID + '/material-panel';
var EVENT_ID_INIT = exports.EVENT_ID_INIT = ADDON_ID + '/material-event/init';
var EVENT_ID_DATA = exports.EVENT_ID_DATA = ADDON_ID + '/material-event/data';
var CSS_CLASS = exports.CSS_CLASS = 'sb-addon-material-ui';