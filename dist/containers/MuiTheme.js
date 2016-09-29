'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _ = require('../');

var _ThemeSideBar = require('../components/ThemeSideBar');

var _ThemeSideBar2 = _interopRequireDefault(_ThemeSideBar);

var _SplitPane = require('../components/SplitPane');

var _SplitPane2 = _interopRequireDefault(_SplitPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// future: add CSS_CLASS
// future: [x] remove ThemeToolbar
var stringify = require('json-stringify-safe');

var propTypes = {
    themesAppliedListInit: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
    themeName: _react2.default.PropTypes.string,
    themeNameArr: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
    story: _react2.default.PropTypes.object.isRequired,
    onChangeState: _react2.default.PropTypes.func.isRequired,
    onThemeOverride: _react2.default.PropTypes.func.isRequired,
    themeListRender: _react2.default.PropTypes.func.isRequired,
    initState: _react2.default.PropTypes.object,
    channel: _react2.default.PropTypes.object
};

var MuiTheme = function (_React$Component) {
    (0, _inherits3.default)(MuiTheme, _React$Component);

    function MuiTheme(props, context) {
        (0, _classCallCheck3.default)(this, MuiTheme);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MuiTheme.__proto__ || (0, _getPrototypeOf2.default)(MuiTheme)).call(this, props, context));

        _this.state = props.initState;
        _this.state.themesAppliedList = props.themesAppliedListInit;
        _this.state.muiTheme = (0, _getMuiTheme2.default)(props.themesAppliedListInit[props.initState.themeInd]);
        _this.state.isMount = false;
        _this.isChannelData = false;
        _this.UpdateList = {};

        _this.changeTheme = _this.changeTheme.bind(_this);
        _this.onChannel = _this.onChannel.bind(_this);
        _this.openSideBar = _this.openSideBar.bind(_this);
        _this.onThemeOverride = _this.onThemeOverride.bind(_this);
        _this.subState = _this.subState.bind(_this);
        _this.wouldComponentUpdate = _this.wouldComponentUpdate.bind(_this);
        _this.needComponentUpdate = _this.needComponentUpdate.bind(_this);

        _this.dataChannelSend = _this.dataChannelSend.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(MuiTheme, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.channel.on(_.EVENT_ID_DATA, this.onChannel);
            if (!this.state.isMount) {
                setTimeout(function () {
                    _this2.needComponentUpdate('ThemeSideBar');
                    _this2.setState({ isMount: true });
                }, 1);
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return true; // fixme: shouldComponentUpdate
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            this.props.onChangeState(nextState);
            this.dataChannelSend(nextState);
            this.isChannelData = false;
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.channel.removeListener(_.EVENT_ID_DATA, this.onChannel);
        }
    }, {
        key: 'onChannel',
        value: function onChannel(state) {
            var _this3 = this;

            this.needComponentUpdate('ThemeSideBar');
            this.isChannelData = true;
            // fixme: onThemeOverride - to store theme
            this.setState((0, _extends3.default)({}, state, { isMount: false }), function () {
                return setTimeout(function () {
                    var override = _this3.onThemeOverride();
                    override(_this3.state.themesAppliedList[_this3.state.themeInd]);
                    _this3.isChannelData = true;
                    _this3.setState({ isMount: true });
                }, 10);
            });
        }
    }, {
        key: 'onThemeOverride',
        value: function onThemeOverride() {
            var _this4 = this;

            var propsThemeOverFunc = this.props.onThemeOverride(this.state.themeInd);
            return function (overTheme) {
                var themesAppliedList = propsThemeOverFunc(overTheme);
                _this4.needComponentUpdate('ThemeSideBar');
                _this4.setState({ themesAppliedList: themesAppliedList });
            };
        }
    }, {
        key: 'dataChannelSend',
        value: function dataChannelSend(data) {
            if (this.isChannelData || !this.state.isMount) return false;
            var dataStr = stringify(data);
            this.props.channel.emit(_.EVENT_ID_DATA, dataStr);
            return true;
        }
    }, {
        key: 'changeTheme',
        value: function changeTheme(ind) {
            this.needComponentUpdate('ThemeSideBar');
            this.setState({
                muiTheme: (0, _getMuiTheme2.default)(this.state.themesAppliedList[ind]),
                themeInd: ind
            });
        }
    }, {
        key: 'openSideBar',
        value: function openSideBar(f) {
            this.needComponentUpdate('ThemeSideBar');
            this.setState({
                isSideBarOpen: f
            });
        }
    }, {
        key: 'subState',
        value: function subState(componentName, prop) {
            var _this5 = this;

            return function (val) {
                if (val == undefined) {
                    return _this5.state[prop];
                }
                var subState = {};
                subState[prop] = val;
                _this5.setState(subState);
                _this5.needComponentUpdate(componentName);
                return val;
            };
        }
    }, {
        key: 'wouldComponentUpdate',
        value: function wouldComponentUpdate(componentName) {
            if (this.UpdateList[componentName] == undefined) {
                this.UpdateList[componentName] = false;
            }
            var upd = this.UpdateList[componentName];
            this.UpdateList[componentName] = false;
            return upd;
        }
    }, {
        key: 'needComponentUpdate',
        value: function needComponentUpdate(componentName) {
            this.UpdateList[componentName] = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var ThemesNameList = this.state.themesAppliedList.map(function (val, ind) {
                return val.themeName || 'Theme ' + (ind + 1);
            });
            var muiTheme = (0, _getMuiTheme2.default)(this.props.themeListRender(this.state.themesAppliedList[this.state.themeInd]));
            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                { muiTheme: muiTheme },
                _react2.default.createElement(
                    'div',
                    {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: muiTheme.palette.canvasColor
                        }

                    },
                    _react2.default.createElement(
                        _SplitPane2.default,
                        {
                            split: 'vertical',
                            minSize: this.state.isSideBarOpen ? 200 : 0,
                            defaultSize: this.state.isSideBarOpen ? 400 : 0,
                            primary: 'second',
                            pane1Style: { overflowX: 'auto', overflowY: 'auto' },
                            pane2Style: { width: this.state.isSideBarOpen ? 'auto' : 0 },
                            resizerStyle: { display: this.state.isSideBarOpen ? 'auto' : 'none' }
                        },
                        _react2.default.createElement(
                            'div',
                            null,
                            this.props.story
                        ),
                        _react2.default.createElement(_ThemeSideBar2.default, {
                            shouldComponentUpdate: true,
                            shouldShowData: this.state.isMount,
                            open: this.state.isSideBarOpen,
                            theme: this.state.themesAppliedList[this.state.themeInd],
                            muiTheme: muiTheme,
                            themeName: ThemesNameList[this.state.themeInd],
                            fullTheme: this.subState('ThemeSideBar', 'isFullTheme'),
                            collapseList: this.subState('ThemeSideBar', 'collapseList'),
                            themesOverrideList: this.subState('ThemeSideBar', 'currentThemeOverride'),
                            onThemeOverride: this.onThemeOverride()
                        })
                    )
                )
            );
        }
    }]);
    return MuiTheme;
}(_react2.default.Component);

exports.default = MuiTheme;


MuiTheme.propTypes = propTypes;