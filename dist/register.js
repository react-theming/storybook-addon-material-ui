'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _PanelContainer = require('./containers/PanelContainer');

var _PanelContainer2 = _interopRequireDefault(_PanelContainer);

var _ = require('./');

var _reactTapEventPlugin = require('react-tap-event-plugin');

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function inject() {
    try {
        (0, _reactTapEventPlugin2.default)();
    } catch (err) {
        console.warn(err);
    }
}
inject();

_storybookAddons2.default.register(_.ADDON_ID, function (api) {
    var channel = _storybookAddons2.default.getChannel();
    _storybookAddons2.default.addPanel(_.PANEL_ID, {
        title: 'Material-UI',
        render: function render() {
            return _react2.default.createElement(_PanelContainer2.default, { channel: channel, api: api });
        }
    });
});
