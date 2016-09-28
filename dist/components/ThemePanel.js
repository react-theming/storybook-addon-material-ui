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

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _SvgButton = require('../material-desktop/SvgButton');

var _SvgButton2 = _interopRequireDefault(_SvgButton);

var _createNewFolder = require('material-ui/svg-icons/file/create-new-folder');

var _createNewFolder2 = _interopRequireDefault(_createNewFolder);

var _fileDownload = require('material-ui/svg-icons/file/file-download');

var _fileDownload2 = _interopRequireDefault(_fileDownload);

var _deleteForever = require('material-ui/svg-icons/action/delete-forever');

var _deleteForever2 = _interopRequireDefault(_deleteForever);

var _SclToggle = require('../material-desktop/SclToggle');

var _SclToggle2 = _interopRequireDefault(_SclToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  themesNameList: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string).isRequired,
  defautThemeInd: _react2.default.PropTypes.number.isRequired,
  onThemeSelect: _react2.default.PropTypes.func.isRequired,
  onToggleSideBar: _react2.default.PropTypes.func.isRequired,
  isSideBarOpen: _react2.default.PropTypes.bool.isRequired,
  themeJSON: _react2.default.PropTypes.string,
  onChangeTheme: _react2.default.PropTypes.func.isRequired,
  onCloneTheme: _react2.default.PropTypes.func.isRequired,
  onDnLoadTheme: _react2.default.PropTypes.func.isRequired,
  onCleanTheme: _react2.default.PropTypes.func.isRequired
};

var defaultProps = {
  themesNameList: ['BaseLight', 'BaseDark'],
  defautThemeInd: 0,
  onThemeSelect: function onThemeSelect() {},
  onToggleSideBar: function onToggleSideBar() {},
  isSideBarOpen: false,
  onCloneTheme: function onCloneTheme() {},
  onDnLoadTheme: function onDnLoadTheme() {},
  onCleanTheme: function onCleanTheme() {}
};

var contextTypes = {
  muiTheme: _react2.default.PropTypes.object.isRequired
};

var ThemePanel = function (_React$Component) {
  (0, _inherits3.default)(ThemePanel, _React$Component);

  function ThemePanel(props) {
    (0, _classCallCheck3.default)(this, ThemePanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ThemePanel.__proto__ || (0, _getPrototypeOf2.default)(ThemePanel)).call(this, props));

    _this.menuItems = props.themesNameList.map(function (val, ind) {
      return _react2.default.createElement(_MenuItem2.default, { value: ind, key: ind, primaryText: val });
    });
    _this.state = {
      value: props.defautThemeInd
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ThemePanel, [{
    key: 'handleChange',
    value: function handleChange(event, index, value) {
      this.setState({ value: value }, this.props.onThemeSelect(value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          style: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            backgroundColor: this.context.muiTheme.palette.canvasColor
          }
        },
        _react2.default.createElement(
          'div',
          {
            style: {
              minWidth: 160,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }
          },
          _react2.default.createElement(
            _DropDownMenu2.default,
            {
              value: this.state.value,
              onChange: this.handleChange,
              iconStyle: { fill: this.context.muiTheme.palette.textColor },
              style: { width: '100%' }
            },
            this.menuItems
          ),
          _react2.default.createElement(
            'div',
            {
              style: {
                //                    width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                margin: '0 16px'
              }
            },
            _react2.default.createElement(_SvgButton2.default, {
              icon: _react2.default.createElement(_fileDownload2.default, null),
              tooltip: 'Download Theme',
              tooltipPosition: 'top-right',
              width: 48,
              onTouchTap: this.props.onDnLoadTheme
            }),
            _react2.default.createElement(_SvgButton2.default, {
              icon: _react2.default.createElement(_createNewFolder2.default, null),
              tooltip: 'this option is in development...',
              tooltipPosition: 'top-right',
              width: 48,
              onTouchTap: this.props.onCloneTheme
            }),
            _react2.default.createElement(_SvgButton2.default, {
              icon: _react2.default.createElement(_deleteForever2.default, null),
              tooltip: 'this option is in development...',
              tooltipPosition: 'top-right',
              width: 48,
              onTouchTap: this.props.onCleanTheme
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { width: 200, minWidth: 150, flexGrow: 1, padding: 16 } },
          _react2.default.createElement('textarea', {
            style: { width: '100%', height: '100%' },
            value: this.props.themeJSON,
            onChange: this.props.onChangeTheme
          })
        ),
        _react2.default.createElement(
          'div',
          { style: { width: 200, paddingTop: 16 } },
          _react2.default.createElement(_SclToggle2.default, {
            label: 'Show Theme Editor',
            labelPosition: 'left',
            toggled: this.props.isSideBarOpen,
            onToggle: function onToggle() {
              return _this2.props.onToggleSideBar(!_this2.props.isSideBarOpen);
            }
          })
        )
      );
    }
  }]);
  return ThemePanel;
}(_react2.default.Component);

exports.default = ThemePanel;


ThemePanel.propTypes = propTypes;
ThemePanel.defaultProps = defaultProps;
ThemePanel.contextTypes = contextTypes;
