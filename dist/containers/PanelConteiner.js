'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _lightBaseTheme = require('material-ui/styles/baseThemes/lightBaseTheme');

var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

var _darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme');

var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

var _ = require('../');

var _ThemePanel = require('../components/ThemePanel');

var _ThemePanel2 = _interopRequireDefault(_ThemePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function (_React$Component) {
    (0, _inherits3.default)(Panel, _React$Component);

    function Panel(props) {
        var _ref;

        (0, _classCallCheck3.default)(this, Panel);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).call.apply(_ref, [this, props].concat(args)));

        _this.state = { isReady: false };

        //        const muiTheme = getMuiTheme(lightBaseTheme);
        _this.onChannel = _this.onChannel.bind(_this);
        _this.onThemeSelect = _this.onThemeSelect.bind(_this);
        _this.onToggleSideBar = _this.onToggleSideBar.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Panel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.channel.on(_.EVENT_ID_INIT, this.onChannel);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.channel.removeListener(_.EVENT_ID_INIT, this.onChannel);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            this.props.channel.emit(_.EVENT_ID_DATA, nextState);
        }
    }, {
        key: 'onChannel',
        value: function onChannel(props) {
            var state = props.panelState;
            state.themesAppliedList = props.themesAppliedList;
            state.muiTheme = (0, _getMuiTheme2.default)(props.themesAppliedList[props.panelState.themeInd]);
            state.ThemesNameList = props.themesAppliedList.map(function (val, ind) {
                return val.themeName || 'Theme ' + (ind + 1);
            });
            state.isReady = true;
            this.setState(state);
            console.info('the panel is initialized');
        }
    }, {
        key: 'onThemeSelect',
        value: function onThemeSelect(ind) {
            //        this.needComponentUpdate('ThemeSideBar');
            this.setState({
                //            muiTheme: getMuiTheme(this.state.themesAppliedList[ind]),
                themeInd: ind
            });
        }
    }, {
        key: 'onToggleSideBar',
        value: function onToggleSideBar(f) {
            //        this.needComponentUpdate('ThemeSideBar');
            this.setState({
                isSideBarOpen: f
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.warn('render PanelContainer');
            return this.state.isReady ? _react2.default.createElement(
                _MuiThemeProvider2.default,
                { muiTheme: this.state.muiTheme },
                _react2.default.createElement(_ThemePanel2.default, {
                    themesNameList: this.state.ThemesNameList,
                    defautThemeInd: this.state.themeInd,
                    isSideBarOpen: this.state.isSideBarOpen,
                    onThemeSelect: this.onThemeSelect,
                    onToggleSideBar: this.onToggleSideBar
                })
            ) : _react2.default.createElement(
                'div',
                null,
                'the panel is not initialized'
            );
            //        return <div>Lorem</div>//<ThemePanel />;
        }
    }]);
    return Panel;
}(_react2.default.Component);

exports.default = Panel;
