'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var propTypes = {
    channel: _react2.default.PropTypes.object
};

var PanelConteiner = function (_React$Component) {
    (0, _inherits3.default)(PanelConteiner, _React$Component);

    function PanelConteiner(props) {
        var _ref;

        (0, _classCallCheck3.default)(this, PanelConteiner);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = PanelConteiner.__proto__ || (0, _getPrototypeOf2.default)(PanelConteiner)).call.apply(_ref, [this, props].concat(args)));

        _this.state = { isReady: false };
        _this.isNewData = false;

        _this.muiTheme = (0, _getMuiTheme2.default)(_lightBaseTheme2.default);

        _this.onInitChannel = _this.onInitChannel.bind(_this);
        _this.onDataChannel = _this.onDataChannel.bind(_this);
        _this.onThemeSelect = _this.onThemeSelect.bind(_this);
        _this.onChangeTheme = _this.onChangeTheme.bind(_this);
        _this.onToggleSideBar = _this.onToggleSideBar.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(PanelConteiner, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.channel.on(_.EVENT_ID_INIT, this.onInitChannel);
            this.props.channel.on(_.EVENT_ID_DATA, this.onDataChannel);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.channel.removeListener(_.EVENT_ID_INIT, this.onInitChannel);
            this.props.channel.removeListener(_.EVENT_ID_DATA, this.onDataChannel);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (!this.isNewData) this.props.channel.emit(_.EVENT_ID_DATA, nextState);
            this.isNewData = false;
        }
    }, {
        key: 'onInitChannel',
        value: function onInitChannel(props) {
            var state = props.panelState;
            state.themesAppliedList = props.themesAppliedList;
            state.muiTheme = (0, _getMuiTheme2.default)(props.themesAppliedList[props.panelState.themeInd]);
            state.ThemesNameList = props.themesAppliedList.map(function (val, ind) {
                return val.themeName || 'Theme ' + (ind + 1);
            });
            state.isReady = true;
            this.setState(state);
        }
    }, {
        key: 'onDataChannel',
        value: function onDataChannel(props) {
            var state = props.panelState;
            state.themesAppliedList = props.themesAppliedList;
            state.muiTheme = (0, _getMuiTheme2.default)(props.themesAppliedList[props.panelState.themeInd]);
            state.ThemesNameList = props.themesAppliedList.map(function (val, ind) {
                return val.themeName || 'Theme ' + (ind + 1);
            });
            state.themeInd = props.panelState.themeInd;
            this.isNewData = true;
            this.setState(state);
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
        key: 'onChangeTheme',
        value: function onChangeTheme(event) {
            var str = event.target.value;
            var newTheme = JSON.parse(str);
            var themesAppliedList = this.state.themesAppliedList;
            themesAppliedList[this.state.themeInd] = newTheme;
            this.setState({ themesAppliedList: themesAppliedList });
            //        console.log(newTheme);
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
            return this.state.isReady ? _react2.default.createElement(
                _MuiThemeProvider2.default,
                { muiTheme: this.muiTheme },
                _react2.default.createElement(_ThemePanel2.default, {
                    themesNameList: this.state.ThemesNameList,
                    defautThemeInd: this.state.themeInd,
                    isSideBarOpen: this.state.isSideBarOpen,
                    onThemeSelect: this.onThemeSelect,
                    onToggleSideBar: this.onToggleSideBar,
                    themeJSON: (0, _stringify2.default)(this.state.themesAppliedList[this.state.themeInd]),
                    onChangeTheme: this.onChangeTheme
                })
            ) : _react2.default.createElement(
                'div',
                {
                    style: {
                        padding: 16,
                        fontFamily: '-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
                        color: 'rgb(68, 68, 68)'
                    }
                },
                'waiting for muiTheme decorator...'
            );
            //        return <div>Lorem</div>//<ThemePanel />;
        }
    }]);
    return PanelConteiner;
}(_react2.default.Component);

exports.default = PanelConteiner;


PanelConteiner.propTypes = propTypes;
