'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _addons = require('@storybook/addons');

var _addons2 = _interopRequireDefault(_addons);

var _PanelContainer = require('./containers/PanelContainer');

var _PanelContainer2 = _interopRequireDefault(_PanelContainer);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_addons2.default.register(_.ADDON_ID, function (api) {
    var channel = _addons2.default.getChannel();
    _addons2.default.addPanel(_.PANEL_ID, {
        title: 'Material-UI',
        render: function render() {
            return _react2.default.createElement(_PanelContainer2.default, { channel: channel, api: api });
        }
    });
});