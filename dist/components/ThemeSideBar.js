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

var _Card = require('material-ui/Card');

var _Table = require('material-ui/Table');

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _ = require('../');

var _ThemePropTable = require('./ThemePropTable.jsx');

var _ThemePropTable2 = _interopRequireDefault(_ThemePropTable);

var _ThemePropBlock = require('./ThemePropBlock.jsx');

var _ThemePropBlock2 = _interopRequireDefault(_ThemePropBlock);

var _ReactScrollbar = require('./ReactScrollbar');

var _ReactScrollbar2 = _interopRequireDefault(_ReactScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BAR_WIDTH = 400;

var propTypes = {
    open: _react2.default.PropTypes.bool.isRequired,
    themeName: _react2.default.PropTypes.string.isRequired,
    theme: _react2.default.PropTypes.object.isRequired,
    muiTheme: _react2.default.PropTypes.object.isRequired,
    fullTheme: _react2.default.PropTypes.func.isRequired,
    collapseList: _react2.default.PropTypes.func.isRequired
};

var ThemeSideBar = function (_React$Component) {
    (0, _inherits3.default)(ThemeSideBar, _React$Component);

    function ThemeSideBar(props) {
        (0, _classCallCheck3.default)(this, ThemeSideBar);
        return (0, _possibleConstructorReturn3.default)(this, (ThemeSideBar.__proto__ || (0, _getPrototypeOf2.default)(ThemeSideBar)).call(this, props));
        /*
        this.state = {
            isFullSet: props.fullTheme(),
        }*/
        //        console.log('ThemeSideBar constructor');
    }

    (0, _createClass3.default)(ThemeSideBar, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.shouldComponentUpdate;
        }
    }, {
        key: 'renderContent',
        value: function renderContent() {
            var _this2 = this;

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
                        null,
                        _react2.default.createElement(_Card.CardTitle, {
                            subtitle: this.props.themeName + ' properties'
                        }),
                        _react2.default.createElement(
                            _Card.CardText,
                            { style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                } },
                            _react2.default.createElement(
                                'div',
                                null,
                                'Theme Settings'
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(_Toggle2.default, {
                                    label: '',
                                    labelPosition: 'right',
                                    labelStyle: this.toggleHeadStyle,
                                    toggled: this.props.fullTheme(),
                                    onToggle: function onToggle() {
                                        return _this2.props.fullTheme(!_this2.props.fullTheme());
                                    }
                                })
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                'Full Settings'
                            )
                        )
                    )
                ),
                themesList(this.props.fullTheme() ? this.props.muiTheme : this.props.theme, this.props)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            //        console.log('ThemeSideBar Render');
            var barWidth = this.props.open ? BAR_WIDTH : 0;
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

function forTable(tableTame, objListFunc, themeInd) {
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

    /*
    const collapseList = this.props.open();
    collapseList[this.props.settingsName] = !this.state.isOpen;
    this.props.open(collapseList);
    this.setState({isOpen : !this.state.isOpen})*/
}

function themesList(themeObj, props) {
    var themePropTable = function themePropTable(tableName, table) {
        return _react2.default.createElement(_ThemePropBlock2.default, {
            key: tableName,
            settingsObj: table,
            settingsName: tableName,
            open: forTable(tableName, props.collapseList),
            override: forTable(tableName, props.themesOverrideList),
            onThemeTableOverride: onThemeTableOverride(tableName)
        });
    }; /* open={props.collapseList} */

    var onThemeTableOverride = function onThemeTableOverride(tableName) {
        return function (propName, value) {
            var overTheme = {};
            if (tableName === 'miscellaneous') {
                overTheme[propName] = value;
                props.onThemeOverride(overTheme);
                return;
            }
            overTheme[tableName] = {};
            overTheme[tableName][propName] = value;
            //            console.log(overTheme);
            props.onThemeOverride(overTheme);
        };
    };

    var keyList = (0, _keys2.default)(themeObj);

    var strList = {};
    keyList.forEach(function (val, ind) {
        if (typeof themeObj[val] === 'string' /* || typeof(themeObj[val]) === 'function'*/) {
                strList[val] = themeObj[val];
            }
    });

    var strListNode = themePropTable('miscellaneous', strList);
    /*
                  <ThemePropTable
                      key="misc"
                      settingsObj={strList}
                      settingsName="miscellaneous"
                      open={props.collapseList}
                      openThis={forTable('palette', props.collapseList)}
                      override={props.themesOverrideList}
                  />
    */
    var paletteList = themeObj.palette ? themePropTable('palette', themeObj.palette)
    /* <ThemePropTable
        key="palette"
        settingsObj={themeObj.palette}
        settingsName="palette"
        open={props.collapseList}
        openThis={forTable('palette', props.collapseList)}
        override={props.themesOverrideList}
    /> */ : _react2.default.createElement(_Card.CardTitle, { subtitle: 'No palette here' });

    var tablesListObj = keyList.map(function (val, ind) {
        if ((0, _typeof3.default)(themeObj[val]) === 'object' && val !== 'palette') {
            return themePropTable(val, themeObj[val])
            /*<ThemePropTable
                key={val}
                settingsObj={themeObj[val]}
                settingsName={val}
                open={props.collapseList}
                openThis={forTable('palette', props.collapseList)}
                override={props.themesOverrideList}
            />*/
            ;
        }
    });

    var scrollStyle = {
        //      border: '5px #2196F3 solid',
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
                { style: {
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
