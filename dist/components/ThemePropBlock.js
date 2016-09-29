'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _SclToggle = require('../material-desktop/SclToggle');

var _SclToggle2 = _interopRequireDefault(_SclToggle);

var _SclAvatar = require('../material-desktop/SclAvatar');

var _SclAvatar2 = _interopRequireDefault(_SclAvatar);

var _ = require('../');

var _ThemePropItem = require('./ThemePropItem');

var _ThemePropItem2 = _interopRequireDefault(_ThemePropItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    settingsObj: _react2.default.PropTypes.object.isRequired,
    settingsName: _react2.default.PropTypes.string.isRequired,
    open: _react2.default.PropTypes.func.isRequired,
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
        _this.onSelect = _this.onSelect.bind(_this);
        _this.renderProp = _this.renderProp.bind(_this);
        _this.renderColl = _this.renderColl.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ThemePropBlock, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            var f = this.needComponentUpdate;
            this.needComponentUpdate = false;
            return f;
        }
    }, {
        key: 'onToolCollapse',
        value: function onToolCollapse(val) {
            var _this2 = this;

            return function (isCol) {
                var toolCollapsedList = _this2.state.toolCollapsedList;

                toolCollapsedList[val] = isCol;
                _this2.needComponentUpdate = true;
                _this2.setState({ toolCollapsedList: toolCollapsedList });
            };
        }
    }, {
        key: 'onSelect',
        value: function onSelect(sel) {
            var select = {
                selectedTable: this.props.settingsName,
                selectedProp: '',
                selectedVal: ''
            };
            var fullSelect = (0, _assign2.default)(select, sel);
            this.props.onSelect(fullSelect);
        }
    }, {
        key: 'valueHandler',
        value: function valueHandler(propName) {
            var _this3 = this;

            return function (event) {
                _this3.needComponentUpdate = true;
                _this3.props.onThemeTableOverride(propName, event.target.value);
            };
        }
    }, {
        key: 'renderProp',
        value: function renderProp(val, ind, isOpen, isHeader) {
            return _react2.default.createElement(
                'div',
                {
                    key: val,
                    style: {
                        minHeight: isOpen ? 32 + (isHeader ? 12 : 0) : 0,
                        transition: 'all 200ms linear 0ms'
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
                    isHeader: isHeader || false,
                    onSelect: this.onSelect
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
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props = this.props;
            var settingsName = _props.settingsName;
            var open = _props.open;

            var onSelect = this.onSelect;
            var openThis = function openThis(f) {
                if (typeof f === 'undefined') return open();
                _this5.needComponentUpdate = true;
                open(f);
                return null;
            };
            return _react2.default.createElement(
                _Paper2.default,
                {
                    style: {
                        paddingLeft: 16,
                        paddingRight: 4,
                        paddingTop: 8,
                        paddingBottom: 8,
                        marginTop: 8
                    }
                },
                _react2.default.createElement(BlockHeader, { settingsName: settingsName, openThis: openThis, onSelect: onSelect }),
                _react2.default.createElement('div', { style: {/*height: 16*/} }),
                this.renderColl()
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
    var toggleOpen = function toggleOpen() {
        props.openThis(!props.openThis());
    };
    return _react2.default.createElement(
        'div',
        {
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }
        },
        _react2.default.createElement(_SclAvatar2.default, {
            onTouchTap: props.onSelect,
            text: props.settingsName
        }),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_SclToggle2.default, {
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
BlockHeader.propTypes = {
    openThis: _react2.default.PropTypes.func.isRequired,
    settingsName: _react2.default.PropTypes.string.isRequired
};