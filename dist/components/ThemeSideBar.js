'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _SclToggle = require('../material-desktop/SclToggle');

var _SclToggle2 = _interopRequireDefault(_SclToggle);

var _SvgButton = require('../material-desktop/SvgButton');

var _SvgButton2 = _interopRequireDefault(_SvgButton);

var _contentCopy = require('material-ui/svg-icons/content/content-copy');

var _contentCopy2 = _interopRequireDefault(_contentCopy);

var _switchCamera = require('material-ui/svg-icons/image/switch-camera');

var _switchCamera2 = _interopRequireDefault(_switchCamera);

var _ = require('../');

var _ThemePropBlock = require('./ThemePropBlock');

var _ThemePropBlock2 = _interopRequireDefault(_ThemePropBlock);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BAR_WIDTH = 400;

var propTypes = {
    open: _react2.default.PropTypes.bool.isRequired,
    themeName: _react2.default.PropTypes.string.isRequired,
    theme: _react2.default.PropTypes.object.isRequired,
    muiTheme: _react2.default.PropTypes.object.isRequired,
    fullTheme: _react2.default.PropTypes.func.isRequired,
    collapseList: _react2.default.PropTypes.func.isRequired,
    shouldComponentUpdate: _react2.default.PropTypes.bool.isRequired,
    shouldShowData: _react2.default.PropTypes.bool.isRequired
};

var ThemeSideBar = function (_React$Component) {
    (0, _inherits3.default)(ThemeSideBar, _React$Component);

    function ThemeSideBar(props) {
        (0, _classCallCheck3.default)(this, ThemeSideBar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ThemeSideBar.__proto__ || (0, _getPrototypeOf2.default)(ThemeSideBar)).call(this, props));

        _this.state = {
            selectedTable: '',
            selectedProp: '',
            selectedVal: '',
            isSelectedStyleObj: true
        };

        _this.clipString = _this.clipString.bind(_this);
        _this.onSelect = _this.onSelect.bind(_this);
        _this.onSwitchStyleObj = _this.onSwitchStyleObj.bind(_this);
        _this.onCopy = _this.onCopy.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ThemeSideBar, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            // fixme shouldComponentUpdate - remove
            return nextProps.shouldComponentUpdate;
        }
    }, {
        key: 'onSelect',
        value: function onSelect(sel) {
            this.setState(sel);
        }
    }, {
        key: 'onSwitchStyleObj',
        value: function onSwitchStyleObj() {
            var isObj = this.state.isSelectedStyleObj;
            this.setState({ isSelectedStyleObj: !isObj });
        }
    }, {
        key: 'onCopy',
        value: function onCopy() {
            var text = this.clipString();
            (0, _Utils.copyToClipboardThis)(text);
        }
    }, {
        key: 'clipString',
        value: function clipString() {
            var table = this.state.selectedTable;
            var prop = this.state.selectedProp;
            var val = this.state.selectedVal;
            var isObj = this.state.isSelectedStyleObj;

            var strTbl = table;
            var strVal = isObj ? prop + ': ' + val + ',' : table + '.' + prop + ' = ' + val + ';';
            return prop ? strVal : strTbl;
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            var _this2 = this;

            var palette = this.context.muiTheme.palette;

            var styleHR = { borderBottom: 'solid ' + palette.borderColor + ' 1px' };
            var blockStyle = {
                width: 21,
                height: 21,
                marginLeft: 4,
                border: 'solid 1px ' + palette.borderColor,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                cursor: 'pointer'
            };
            return _react2.default.createElement(
                'div',
                {
                    className: _.CSS_CLASS + '-theme_sidebar-content',
                    style: {
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch'

                    }
                },
                _react2.default.createElement(
                    'div',
                    { style: { paddingLeft: 3, paddingBottom: 6 } },
                    _react2.default.createElement(
                        _Paper2.default,
                        { style: { paddingLeft: 16, paddingRight: 8, paddingTop: 8 } },
                        _react2.default.createElement(
                            'h3',
                            {
                                style: {
                                    margin: 0,
                                    marginBottom: 4,
                                    color: palette.secondaryTextColor,
                                    fontSize: 16
                                }
                            },
                            this.props.themeName + ' properties'
                        ),
                        _react2.default.createElement('div', { style: styleHR }),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    marginTop: 8,
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: 14,
                                    color: palette.secondaryTextColor
                                }
                            },
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
                                        color: !this.props.fullTheme() ? palette.textColor : ''
                                    }
                                },
                                'Theme Settings'
                            ),
                            _react2.default.createElement(_SclToggle2.default, {
                                label: '',
                                labelPosition: 'right',
                                labelStyle: this.toggleHeadStyle,
                                toggled: this.props.fullTheme(),
                                onToggle: function onToggle() {
                                    return _this2.props.fullTheme(!_this2.props.fullTheme());
                                }
                            }),
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
                                        color: this.props.fullTheme() ? palette.textColor : ''
                                    }
                                },
                                'Full Settings'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            {
                                style: {
                                    paddingBottom: 8,
                                    paddingRight: 8
                                }
                            },
                            _react2.default.createElement(
                                'div',
                                {
                                    style: {
                                        marginTop: 8,
                                        //                      paddingBottom: 8,
                                        //                        padding: 2,
                                        width: '100%',
                                        height: 24,
                                        display: 'flex',
                                        alignItems: 'center',
                                        border: '1px grey solid',
                                        borderColor: palette.borderColor,
                                        backgroundColor: 'rgba(128, 128, 128, 0.1)'
                                    }
                                },
                                _react2.default.createElement('input', {
                                    type: 'text',
                                    onChange: null,
                                    value: this.clipString(),
                                    title: 'click to copy to clipboard',
                                    disabled: true,
                                    style: {
                                        width: '100%',
                                        padding: 2,
                                        margin: 0,
                                        border: 'none',
                                        backgroundColor: 'rgba(0, 0, 0, 0)',
                                        color: palette.secondaryTextColor,
                                        cursor: 'text'
                                    }
                                }),
                                _react2.default.createElement(_SvgButton2.default, {
                                    icon: _react2.default.createElement(_contentCopy2.default, null),
                                    tooltip: 'Copy to clipboard',
                                    width: 48,
                                    onTouchTap: this.onCopy
                                }),
                                _react2.default.createElement('div', { style: { width: 4 } }),
                                _react2.default.createElement(_SvgButton2.default, {
                                    icon: _react2.default.createElement(_switchCamera2.default, null),
                                    tooltip: 'switch style',
                                    width: 48,
                                    onTouchTap: this.onSwitchStyleObj
                                })
                            )
                        )
                    )
                ),
                this.props.shouldShowData ? themesList(this.props.fullTheme() ? this.props.muiTheme : this.props.theme, this.props, this.onSelect) : null
            );
        }
    }, {
        key: 'render',
        value: function render() {
            //        const barWidth = this.props.open ? BAR_WIDTH : 0; // fixme BAR_WIDTH

            return _react2.default.createElement(
                'div',
                {
                    className: _.CSS_CLASS + '-theme_sidebar',
                    style: { width: '100%', height: '100%' }
                },
                this.props.open ? this.renderContent() : null
            );
        }
    }]);
    return ThemeSideBar;
}(_react2.default.Component);

exports.default = ThemeSideBar;


ThemeSideBar.propTypes = propTypes;

ThemeSideBar.contextTypes = {
    muiTheme: _react2.default.PropTypes.object.isRequired
};

function forTable(tableTame, objListFunc) {
    return function (val) {
        var objList = objListFunc();
        var obj = objList[tableTame];
        if (val == undefined) {
            return obj;
        }
        objList[tableTame] = val;
        objListFunc(objList);
        return val;
    };
}

function themesList(themeObj, _props, onSelect) {
    var onThemeTableOverride = function onThemeTableOverride(tableName) {
        return function (propName, value) {
            var overTheme = {};
            if (tableName === 'miscellaneous') {
                overTheme[propName] = value;
                _props.onThemeOverride(overTheme);
                return;
            }
            overTheme[tableName] = {};
            overTheme[tableName][propName] = value;
            _props.onThemeOverride(overTheme);
        };
    };

    var themePropTable = function themePropTable(tableName, table) {
        return _react2.default.createElement(_ThemePropBlock2.default, {
            key: tableName,
            settingsObj: table,
            settingsName: tableName,
            open: forTable(tableName, _props.collapseList),
            override: forTable(tableName, _props.themesOverrideList),
            onThemeTableOverride: onThemeTableOverride(tableName),
            onSelect: onSelect
        });
    };

    var keyList = (0, _keys2.default)(themeObj);

    var strList = {};
    keyList.forEach(function (val) {
        if (typeof themeObj[val] === 'string') {
            strList[val] = themeObj[val];
        }
    });

    var strListNode = themePropTable('miscellaneous', strList);
    var paletteList = themeObj.palette ? themePropTable('palette', themeObj.palette) : _react2.default.createElement(
        'div',
        null,
        ' ',
        'No palette here',
        ' '
    );

    var tablesListObj = keyList.map(function (val) {
        if ((0, _typeof3.default)(themeObj[val]) === 'object' && val !== 'palette') {
            return themePropTable(val, themeObj[val]);
        }
        return null;
    });

    var scrollStyle = {
        height: '100%',
        overflowY: 'scroll'
    };
    return _react2.default.createElement(
        'div',
        {
            className: _.CSS_CLASS + '-theme_sidebar-tables',
            style: {

                height: 100,
                flexGrow: 1,
                flexShrink: 1
            }
        },
        _react2.default.createElement(
            'div',
            {
                className: _.CSS_CLASS + '-theme_sidebar-tables-scroll',
                style: scrollStyle
            },
            _react2.default.createElement(
                'div',
                {
                    style: {
                        paddingLeft: 3,
                        paddingRight: 12

                    }
                },
                _react2.default.createElement(
                    'div',
                    { style: { backgroundColor: 'rgba(128, 128, 128, 0.04)' } },
                    paletteList,
                    tablesListObj,
                    strListNode,
                    _react2.default.createElement('div', { style: { height: 16 } })
                )
            )
        )
    );
}