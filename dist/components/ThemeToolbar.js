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

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _chevronLeft = require('material-ui/svg-icons/navigation/chevron-left.js');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right.js');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _expandMore = require('material-ui/svg-icons/navigation/expand-more');

var _expandMore2 = _interopRequireDefault(_expandMore);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Toolbar = require('material-ui/Toolbar');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeToolbar = function (_React$Component) {
    (0, _inherits3.default)(ThemeToolbar, _React$Component);

    function ThemeToolbar(props) {
        (0, _classCallCheck3.default)(this, ThemeToolbar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ThemeToolbar.__proto__ || (0, _getPrototypeOf2.default)(ThemeToolbar)).call(this, props));

        _this.menuItems = props.themesNameList.map(function (val, ind) {
            return _react2.default.createElement(_MenuItem2.default, { value: ind, key: ind, primaryText: val });
        });
        _this.state = {
            value: props.defautThemeInd,
            alreadyInjected: false
        };

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ThemeToolbar, [{
        key: 'handleChange',
        value: function handleChange(event, index, value) {
            this.setState({ value: value }, this.props.onThemeSelect(value));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            //        console.log(`injected: ${this.state.alreadyInjected}`)
            return _react2.default.createElement(
                _Toolbar.Toolbar,
                { style: {} },
                _react2.default.createElement(
                    _Toolbar.ToolbarGroup,
                    { firstChild: true },
                    _react2.default.createElement(_Toolbar.ToolbarTitle, { text: 'Material-UI Themes', style: { marginLeft: 20 } })
                ),
                _react2.default.createElement(
                    _Toolbar.ToolbarGroup,
                    { lastChild: true, style: {/* marginRight: 0*/} },
                    _react2.default.createElement(_FontIcon2.default, { className: 'muidocs-icon-custom-sort' }),
                    _react2.default.createElement(_Toolbar.ToolbarSeparator, null),
                    _react2.default.createElement(
                        _DropDownMenu2.default,
                        {
                            value: this.state.value,
                            onChange: this.handleChange,
                            underlineStyle: { border: 'solid 2px black' },
                            iconStyle: { fill: this.context.muiTheme.palette.textColor }
                        },
                        this.menuItems
                    ),
                    _react2.default.createElement(
                        _IconButton2.default,
                        {
                            tooltip: this.props.isSideBarOpen ? 'Close side bar' : 'Open side bar',
                            onTouchTap: function onTouchTap() {
                                return _this2.props.onToggleSideBar(!_this2.props.isSideBarOpen);
                            },
                            tooltipPosition: 'bottom-left'
                        },
                        this.props.isSideBarOpen ? _react2.default.createElement(_chevronRight2.default, null) : _react2.default.createElement(_chevronLeft2.default, null)
                    )
                )
            );
        }
    }]);
    return ThemeToolbar;
}(_react2.default.Component);

exports.default = ThemeToolbar;


ThemeToolbar.contextTypes = {
    muiTheme: _react2.default.PropTypes.object.isRequired
};

/*
    todo: snackbar буфер (вкл/откл), таблица / таблица.свойство = значение

*/
