'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _Toggle = require('material-ui/Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

var _ = require('../');

var _ThemePropItem = require('./ThemePropItem');

var _ThemePropItem2 = _interopRequireDefault(_ThemePropItem);

var _Utils = require('../Utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    settingsObj: _react2.default.PropTypes.object.isRequired,
    settingsName: _react2.default.PropTypes.string.isRequired,
    open: _react2.default.PropTypes.func.isRequired,
    //    override: React.PropTypes.func.isRequired,
    onThemeTableOverride: _react2.default.PropTypes.func.isRequired
};

var contextTypes = {
    muiTheme: _react2.default.PropTypes.object.isRequired
};

var ThemePropBlock = function (_React$Component) {
    (0, _inherits3.default)(ThemePropBlock, _React$Component);

    function ThemePropBlock(props) {
        var _ref;

        (0, _classCallCheck3.default)(this, ThemePropBlock);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = ThemePropBlock.__proto__ || (0, _getPrototypeOf2.default)(ThemePropBlock)).call.apply(_ref, [this, props].concat(args)));

        _this.state = {
            toolCollapsedList: {}
        };
        _this.needComponentUpdate = false;
        _this.valueHandler = _this.valueHandler.bind(_this);
        _this.onToolCollapse = _this.onToolCollapse.bind(_this);
        _this.renderProp = _this.renderProp.bind(_this);
        _this.renderColl = _this.renderColl.bind(_this);
        _this.renderExp = _this.renderExp.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ThemePropBlock, [{
        key: 'valueHandler',
        value: function valueHandler(propName) {
            var _this2 = this;

            return function (event) {
                _this2.needComponentUpdate = true;
                _this2.props.onThemeTableOverride(propName, event.target.value);
            };
        }
    }, {
        key: 'onToolCollapse',
        value: function onToolCollapse(val) {
            var _this3 = this;

            return function (isCol) {
                var toolCollapsedList = _this3.state.toolCollapsedList;

                toolCollapsedList[val] = isCol;
                _this3.needComponentUpdate = true;
                _this3.setState({ toolCollapsedList: toolCollapsedList });
            };
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            var f = this.needComponentUpdate;
            this.needComponentUpdate = false;
            return f;
        }
    }, {
        key: 'renderProp',
        value: function renderProp(val, ind, isOpen, isHeader) {
            return _react2.default.createElement(
                'div',
                {
                    key: val,
                    style: {
                        minHeight: isOpen ? 32 : 0,
                        transition: 'min-height 200ms linear 0ms'
                    }
                },
                isOpen ? _react2.default.createElement(_ThemePropItem2.default, {
                    val: val,
                    ind: ind,
                    settingsObj: this.props.settingsObj,
                    valueHandler: this.valueHandler,
                    isCollapsed: this.state.toolCollapsedList[val],
                    onCollapsed: this.onToolCollapse(val),
                    isOpen: isOpen || false,
                    isHeader: isHeader || false
                }) : null
            );
        }
    }, {
        key: 'renderColl',
        value: function renderColl() {
            var _this4 = this;

            var settingsObj = this.props.settingsObj;
            var keyList = (0, _keys2.default)(settingsObj);
            var rowList = keyList.map(function (val, ind) {
                return _this4.renderProp(val, ind, _this4.props.open());
            });
            return _react2.default.createElement(
                'div',
                null,
                this.renderProp(this.props.settingsName + '-header', 0, this.props.open(), true),
                rowList
            );
        }
    }, {
        key: 'renderExp',
        value: function renderExp() {/*
                                     const settingsObj = this.props.settingsObj;
                                     const keyList = Object.keys(settingsObj);
                                     const rowList = keyList.map((val, ind) => ( this.renderProp(val, ind, true) ));
                                     return (<div>{rowList}</div>);*/
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            //        console.warn('render ThemePropBlock')
            var _props = this.props;
            var settingsName = _props.settingsName;
            var open = _props.open;

            var openThis = function openThis(f) {
                if (typeof f === 'undefined') return open();
                _this5.needComponentUpdate = true;
                open(f);
            };
            return _react2.default.createElement(
                _Paper2.default,
                {
                    style: {
                        paddingLeft: 16,
                        paddingRight: 4,
                        paddingTop: 8,
                        paddingBottom: 16,
                        marginTop: 8
                    }
                },
                _react2.default.createElement(BlockHeader, { settingsName: settingsName, openThis: openThis }),
                _react2.default.createElement('div', { style: { height: 16 } }),
                /* this.props.open() ? this.renderExp() : */this.renderColl()
            );
        }
    }]);
    return ThemePropBlock;
}(_react2.default.Component);

exports.default = ThemePropBlock;


ThemePropBlock.propTypes = propTypes;
ThemePropBlock.contextTypes = contextTypes;

function BlockHeader(props, context) {
    var toggleHeadStyle = {
        color: context.muiTheme.palette.primary1Color,
        fontSize: context.muiTheme.flatButton.fontSize
    };
    var toggleOpen = function toggleOpen(e) {
        props.openThis(!props.openThis());
    };
    return _react2.default.createElement(
        'div',
        { style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            } },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _Chip2.default,
                { onTouchTap: (0, _Utils.copyToClipboard)(props.settingsName) },
                _react2.default.createElement(
                    _Avatar2.default,
                    { size: 18 },
                    props.settingsName[0]
                ),
                props.settingsName
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Toggle2.default, {
                label: '',
                labelPosition: 'right',
                labelStyle: toggleHeadStyle,
                toggled: props.openThis() || false,
                onToggle: toggleOpen
            })
        )
    );
}

BlockHeader.contextTypes = contextTypes;
