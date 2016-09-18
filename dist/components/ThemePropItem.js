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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Tabs = require('material-ui/Tabs');

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _ = require('../');

var _reactMaterialColorPicker = require('react-material-color-picker');

var _reactMaterialColorPicker2 = _interopRequireDefault(_reactMaterialColorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    val: _react2.default.PropTypes.string.isRequired,
    ind: _react2.default.PropTypes.number.isRequired,
    settingsObj: _react2.default.PropTypes.object.isRequired,
    valueHandler: _react2.default.PropTypes.func.isRequired,
    isCollapsed: _react2.default.PropTypes.bool.isRequired,
    onCollapsed: _react2.default.PropTypes.func.isRequired,
    isOpen: _react2.default.PropTypes.bool.isRequired,
    isHeader: _react2.default.PropTypes.bool.isRequired
};

var defaultProps = {
    val: 'val',
    ind: 7,
    settingsObj: {},
    valueHandler: function valueHandler() {},
    isCollapsed: true,
    isOpen: true,
    isHeader: true
};

var contextTypes = {
    muiTheme: _react2.default.PropTypes.object.isRequired
};

var ThemePropItem = function (_React$Component) {
    (0, _inherits3.default)(ThemePropItem, _React$Component);

    function ThemePropItem(props) {
        var _ref;

        (0, _classCallCheck3.default)(this, ThemePropItem);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = ThemePropItem.__proto__ || (0, _getPrototypeOf2.default)(ThemePropItem)).call.apply(_ref, [this, props].concat(args)));

        _this.onToolTogle = _this.onToolTogle.bind(_this);
        _this.renderProp = _this.renderProp.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ThemePropItem, [{
        key: 'onToolTogle',
        value: function onToolTogle() {
            this.props.onCollapsed(!this.props.isCollapsed);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return true;
            var val = this.props.val;
            var shouldCollapsed = nextProps.isCollapsed !== this.props.isCollapsed;
            var shouldOpen = nextProps.isOpen !== this.props.isOpen;
            var shouldsettingsObj = nextProps.settingsObj[val] !== this.props.settingsObj[val];
            var shouldUpdate = shouldCollapsed || shouldOpen || shouldsettingsObj;
            if (shouldUpdate) {
                console.log('shouldUpdate: ' + val + ' ' + shouldCollapsed + ' ' + shouldOpen + ' ' + shouldsettingsObj);
            }
            return shouldUpdate;
        }
    }, {
        key: 'renderProp',
        value: function renderProp(isNotHeader) {
            var palette = this.context.muiTheme.palette;
            var _props = this.props;
            var ind = _props.ind;
            var val = _props.val;
            var settingsObj = _props.settingsObj;
            var valueHandler = _props.valueHandler;
            var isCollapsed = _props.isCollapsed;
            var isOpen = _props.isOpen;

            var onToolTogle = this.onToolTogle;
            var styleHR = { borderBottom: 'solid ' + palette.borderColor + ' 1px' };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(PropItem, { ind: ind, val: val, settingsObj: settingsObj, valueHandler: valueHandler, isNotHeader: isNotHeader, onToolTogle: onToolTogle, isOpen: isOpen }),
                _react2.default.createElement(PropToolPicker, (0, _extends3.default)({ isCollapsed: isCollapsed, onToolTogle: onToolTogle }, {
                    settingsObj: settingsObj[val],
                    valueHandler: valueHandler(val)
                })),
                _react2.default.createElement(
                    'div',
                    { style: { height: isOpen ? 4 : 0, overflow: 'hidden' } },
                    _react2.default.createElement('div', { style: styleHR })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            //        console.log(`render ${this.props.val}`);
            return _react2.default.createElement(
                'div',
                null,
                this.renderProp(!this.props.isHeader)
            );
        }
    }]);
    return ThemePropItem;
}(_react2.default.Component);

exports.default = ThemePropItem;


ThemePropItem.propTypes = propTypes;
ThemePropItem.defaultProps = defaultProps;
ThemePropItem.contextTypes = contextTypes;

function PropItem(props, context) {
    var palette = context.muiTheme.palette;
    var settingsObj = props.settingsObj;
    var val = props.val;
    var ind = props.ind;
    var valueHandler = props.valueHandler;
    var isOpen = props.isOpen;
    var isNotHeader = props.isNotHeader;

    return _react2.default.createElement(
        'div',
        {
            className: _.CSS_CLASS + '-prop-item',
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                flexWrap: 'wrap',
                paddingRight: 4,
                //                paddingTop: 8,
                fontSize: 12,
                height: isOpen ? 38 : 0,
                transition: 'height 400ms ease 0ms',
                overflow: 'hidden',
                color: isNotHeader ? '' : palette.secondaryTextColor
            }
        },
        _react2.default.createElement(PropHeader, { val: val, ind: ind, isNotHeader: isNotHeader }),
        _react2.default.createElement(
            'div',
            {
                className: _.CSS_CLASS + '-prop-value',
                style: {
                    //                    minWidth: 135,
                    //                    maxWidth: 250,
                    width: 'auto',
                    //                    paddingLeft: 16,
                    flexShrink: 1,
                    flexGrow: 1,
                    //                    backgroundColor: '#bdcdd9',
                    display: 'flex',
                    justifyContent: 'space-between' }
            },
            _react2.default.createElement(PropInput, {
                valueHandler: valueHandler(val),
                settingsObj: settingsObj[val],
                isNotHeader: isNotHeader
            }),
            _react2.default.createElement(PropTool, {
                color: settingsObj[val],
                onTool: props.onToolTogle,
                isNotHeader: isNotHeader
            })
        )
    );
}

PropItem.contextTypes = contextTypes;

function PropHeader(props, context) {
    var ind = props.ind;
    var val = props.val;
    var isNotHeader = props.isNotHeader;

    return _react2.default.createElement(
        'div',
        {
            className: _.CSS_CLASS + '-prop-header',
            title: val,
            style: {
                display: 'flex',
                justifyContent: 'flex-start',
                overflowX: 'hidden',
                flexShrink: 2,
                flexGrow: 10,
                width: 90
            }
        },
        _react2.default.createElement(
            'div',
            { style: {/*maxWidth: 40, minWidth: 20*/} },
            isNotHeader ? ind + 1 : '#'
        ),
        _react2.default.createElement(
            'div',
            {
                style: {
                    marginLeft: 16,
                    marginRight: 16,
                    //                marginBottom: 4,
                    minWidth: 100,
                    textAlign: 'left',
                    overflowX: 'hidden'
                }
            },
            _react2.default.createElement(
                'div',
                null,
                isNotHeader ? val : 'Prop Name'
            )
        )
    );
}

PropHeader.contextTypes = contextTypes;

function PropInput(props, context) {
    var palette = context.muiTheme.palette;
    var valueHandler = props.valueHandler;
    var settingsObj = props.settingsObj;
    var isNotHeader = props.isNotHeader;

    var isInt = settingsObj === parseInt(settingsObj);
    var strStyle = {
        width: isInt ? 40 : 'auto',
        textAlign: isInt ? 'right' : 'left'
    };
    return isNotHeader ? _react2.default.createElement('input', {
        type: 'text',
        onChange: valueHandler,
        value: settingsObj,
        title: settingsObj,
        style: (0, _extends3.default)({
            border: 'none',
            //              maxWidth: 130,
            fontStyle: 'italic',
            padding: 2,
            backgroundColor: palette.canvasColor,
            color: palette.textColor
        }, strStyle)
    }) : _react2.default.createElement(
        'div',
        {
            style: (0, _extends3.default)({
                border: 'none',
                minWidth: 162,
                padding: 2
            }, strStyle)
        },
        ' Prop Value '
    );
}

PropInput.contextTypes = contextTypes;

function PropTool(props, context) {
    var palette = context.muiTheme.palette;
    var isNotHeader = props.isNotHeader;

    var blockStyle = {
        width: 16,
        height: 16,
        marginLeft: 4,
        border: 'solid 1px ' + palette.borderColor,
        backgroundColor: isNotHeader ? props.color : 'rgba(0, 0, 0, 0)',
        cursor: isNotHeader ? 'pointer' : ''
    };
    var toolProps = {
        style: blockStyle,
        title: isNotHeader ? props.color : 'view',
        onClick: isNotHeader ? props.onTool : null
    };
    return _react2.default.createElement('div', toolProps);
}

PropTool.contextTypes = contextTypes;

function PropToolPicker(props, context) {
    var settingsObj = props.settingsObj;
    var valueHandler = props.valueHandler;
    var onToolTogle = props.onToolTogle;

    var initColor = parseInt(settingsObj) === settingsObj ? '' : settingsObj;
    //    const initColor = `${settingsObj} `;
    var style = {
        height: props.isCollapsed ? 0 : 200,
        transition: 'height 300ms ease 0ms',
        overflow: 'hidden'
    };
    var tabStyle = { height: 16, marginTop: -12, fontSize: 12 };
    var onSubmit = function onSubmit(event) {
        valueHandler(event);
        onToolTogle();
    };
    return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
            _Tabs.Tabs,
            {
                tabItemContainerStyle: { height: 24 }
            },
            _react2.default.createElement(
                _Tabs.Tab,
                { label: 'Color',
                    style: tabStyle },
                _react2.default.createElement(
                    'div',
                    { style: { border: 'solid 1px grey' } },
                    _react2.default.createElement(_reactMaterialColorPicker2.default, {
                        initColor: initColor,
                        onSubmit: onSubmit,
                        onSelect: valueHandler,
                        onReset: onSubmit
                    })
                )
            ),
            _react2.default.createElement(
                _Tabs.Tab,
                { label: 'Number', style: tabStyle },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Tab Two'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'This is another example tab.'
                    ),
                    _react2.default.createElement(_Slider2.default, { name: 'slider0', defaultValue: 0.5 })
                )
            ),
            _react2.default.createElement(
                _Tabs.Tab,
                {
                    label: 'String',
                    'data-route': '/home',
                    onActive: null /*handleActive*/,
                    style: tabStyle
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Tab Three'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'This is a third example tab.'
                    )
                )
            ),
            _react2.default.createElement(
                _Tabs.Tab,
                { label: 'Palette', style: tabStyle },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Tab Two'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'This is another example tab.'
                    ),
                    _react2.default.createElement(_Slider2.default, { name: 'slider0', defaultValue: 0.5 })
                )
            ),
            _react2.default.createElement(
                _Tabs.Tab,
                { label: 'Icon', style: tabStyle },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Tab Two'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'This is another example tab.'
                    ),
                    _react2.default.createElement(_Slider2.default, { name: 'slider0', defaultValue: 0.5 })
                )
            )
        )
    );
}

PropToolPicker.contextTypes = contextTypes;
