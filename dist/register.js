'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _PanelConteiner = require('./containers/PanelConteiner');

var _PanelConteiner2 = _interopRequireDefault(_PanelConteiner);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_storybookAddons2.default.register(_.ADDON_ID, function (api) {
    var channel = _storybookAddons2.default.getChannel();
    _storybookAddons2.default.addPanel(_.PANEL_ID, {
        title: 'Material-UI',
        render: function render() {
            return _react2.default.createElement(_PanelConteiner2.default, { channel: channel });
        }
    });
});
