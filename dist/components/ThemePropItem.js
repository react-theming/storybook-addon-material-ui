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
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return true;
      // future: shouldComponentUpdate
      //        const val = this.props.val;
      //        const shouldCollapsed = (nextProps.isCollapsed !== this.props.isCollapsed);
      //        const shouldOpen = (nextProps.isOpen !== this.props.isOpen);
      //        const shouldsettingsObj = (nextProps.settingsObj[val] !== this.props.settingsObj[val]);
      //        const shouldUpdate = (shouldCollapsed || shouldOpen || shouldsettingsObj);
      //        if (shouldUpdate) {
      //            console.log(
      //      `shouldUpdate: ${val} ${shouldCollapsed} ${shouldOpen} ${shouldsettingsObj}`
      //      );
      //        }
      //        return shouldUpdate;
    }
  }, {
    key: 'onToolTogle',
    value: function onToolTogle() {
      this.props.onCollapsed(!this.props.isCollapsed);
    }
  }, {
    key: 'renderProp',
    value: function renderProp(isNotHeader) {
      var palette = this.context.muiTheme.palette;
      var _props = this.props;
      var ind = _props.ind;
      var val = _props.val;
      var valueHandler = _props.valueHandler;
      var isCollapsed = _props.isCollapsed;
      var isOpen = _props.isOpen;
      var onSelect = _props.onSelect;

      var settingsObj = this.props.settingsObj || { isNotHeader: isNotHeader };
      var onToolTogle = this.onToolTogle;
      var styleHR = { borderBottom: 'solid ' + palette.borderColor + ' 1px' };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(PropItem, { ind: ind, val: val, settingsObj: settingsObj, valueHandler: valueHandler, isNotHeader: isNotHeader, onToolTogle: onToolTogle, isOpen: isOpen, onSelect: onSelect }),
        _react2.default.createElement(PropToolPicker, (0, _extends3.default)({ isCollapsed: isCollapsed, onToolTogle: onToolTogle }, {
          settingsObj: isNotHeader ? settingsObj[val] : '',
          valueHandler: valueHandler(val)
        })),
        _react2.default.createElement(
          'div',
          { style: { height: isOpen ? 1 : 0, overflow: 'hidden' } },
          _react2.default.createElement('div', { style: styleHR })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
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

  var color = typeof settingsObj[val] === 'string' ? settingsObj[val] : '';
  var onSelect = function onSelect() {
    var select = {
      selectedProp: val,
      selectedVal: '\'' + settingsObj[val] + '\''
    };
    props.onSelect(select);
  };
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
        paddingTop: isNotHeader ? 4 : 16,
        fontSize: 12,
        height: isOpen ? 24 : 0,
        transition: 'all 100ms ease 0ms',
        overflow: 'hidden',
        color: isNotHeader ? '' : palette.secondaryTextColor
      },
      onTouchTap: onSelect
    },
    _react2.default.createElement(PropHeader, { val: val, ind: ind, isNotHeader: isNotHeader }),
    _react2.default.createElement(
      'div',
      {
        className: _.CSS_CLASS + '-prop-value',
        style: {
          width: 'auto',
          flexShrink: 1,
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-between'
        }
      },
      _react2.default.createElement(PropInput, {
        valueHandler: valueHandler(val) || null,
        settingsObj: settingsObj[val] || '',
        isNotHeader: isNotHeader
      }),
      _react2.default.createElement(PropTool, {
        color: color,
        onTool: props.onToolTogle,
        isNotHeader: isNotHeader
      })
    )
  );
}

PropItem.propTypes = {
  settingsObj: _react2.default.PropTypes.object.isRequired,
  val: _react2.default.PropTypes.string.isRequired,
  ind: _react2.default.PropTypes.number.isRequired,
  onToolTogle: _react2.default.PropTypes.func.isRequired,
  valueHandler: _react2.default.PropTypes.func.isRequired,
  isOpen: _react2.default.PropTypes.bool.isRequired,
  isNotHeader: _react2.default.PropTypes.bool.isRequired
};
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
      { style: { color: context.muiTheme.palette.secondaryTextColor } },
      isNotHeader ? ind + 1 : '#'
    ),
    _react2.default.createElement(
      'div',
      {
        style: {
          marginLeft: 16,
          marginRight: 16,
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
PropHeader.propTypes = {
  val: _react2.default.PropTypes.string.isRequired,
  ind: _react2.default.PropTypes.number.isRequired,
  isNotHeader: _react2.default.PropTypes.bool.isRequired
};
PropHeader.contextTypes = contextTypes;

function PropInput(props, context) {
  var palette = context.muiTheme.palette;
  var valueHandler = props.valueHandler;
  var settingsObj = props.settingsObj;
  var isNotHeader = props.isNotHeader;

  var isInt = settingsObj === parseInt(settingsObj, 10);
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
      fontStyle: 'italic',
      padding: 2,
      backgroundColor: palette.canvasColor,
      color: palette.primary2Color
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
    'Prop Value'
  );
}
PropInput.propTypes = {
  settingsObj: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  valueHandler: _react2.default.PropTypes.func,
  isNotHeader: _react2.default.PropTypes.bool.isRequired
};
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
PropTool.propTypes = {
  isNotHeader: _react2.default.PropTypes.bool.isRequired,
  color: _react2.default.PropTypes.string.isRequired,
  onTool: _react2.default.PropTypes.func.isRequired
};
PropTool.contextTypes = contextTypes;

function PropToolPicker(props, context) {
  var settingsObj = props.settingsObj;
  var valueHandler = props.valueHandler;
  var onToolTogle = props.onToolTogle;

  var initColor = '' + settingsObj;
  var style = {
    height: props.isCollapsed ? 0 : 200,
    transition: 'height 300ms ease 0ms',
    overflow: 'hidden'
  };
  var onSubmit = function onSubmit(event) {
    valueHandler(event);
    onToolTogle();
  };
  // fixme: check onReset
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(
      'div',
      { style: { border: 'solid 1px grey' } },
      _react2.default.createElement(_reactMaterialColorPicker2.default, {
        initColor: initColor,
        onSubmit: onSubmit,
        onSelect: valueHandler,
        onHover: valueHandler,
        onReset: onSubmit
      })
    )
  );
}
PropToolPicker.propTypes = {
  settingsObj: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  isCollapsed: _react2.default.PropTypes.bool.isRequired,
  valueHandler: _react2.default.PropTypes.func.isRequired,
  onToolTogle: _react2.default.PropTypes.func.isRequired
};
PropToolPicker.contextTypes = contextTypes;

// future: we will use when all components be ready
function PropToolPickerFull(props, context) {
  var settingsObj = props.settingsObj;
  var valueHandler = props.valueHandler;
  var onToolTogle = props.onToolTogle;

  var initColor = '' + settingsObj;
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
        {
          label: 'Color',
          style: tabStyle
        },
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
          onActive: null,
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
PropToolPickerFull.propTypes = {
  settingsObj: _react2.default.PropTypes.object.isRequired,
  isCollapsed: _react2.default.PropTypes.bool.isRequired,
  valueHandler: _react2.default.PropTypes.func.isRequired,
  onToolTogle: _react2.default.PropTypes.func.isRequired
};
PropToolPickerFull.contextTypes = contextTypes;
