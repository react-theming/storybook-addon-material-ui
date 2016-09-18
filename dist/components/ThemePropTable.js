'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _checkCircle = require('material-ui/svg-icons/action/check-circle');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _Tabs = require('material-ui/Tabs');

var _Slider = require('material-ui/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _ = require('../');

var _reactMaterialColorPicker = require('react-material-color-picker');

var _reactMaterialColorPicker2 = _interopRequireDefault(_reactMaterialColorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    settingsObj: _react2.default.PropTypes.object.isRequired,
    settingsName: _react2.default.PropTypes.string.isRequired,
    open: _react2.default.PropTypes.func.isRequired,
    override: _react2.default.PropTypes.func.isRequired
};

var ThemePropTable = function (_React$Component) {
    (0, _inherits3.default)(ThemePropTable, _React$Component);

    function ThemePropTable(props, context) {
        (0, _classCallCheck3.default)(this, ThemePropTable);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ThemePropTable.__proto__ || (0, _getPrototypeOf2.default)(ThemePropTable)).call(this, props));

        _this.cellStyle = {
            margin: 4,
            padding: 4,
            height: 24
        };
        _this.cellIndStyle = {
            margin: 4,
            padding: 4,
            width: 15,
            height: 24
        };
        _this.cellTollStyle = {
            margin: 4,
            padding: 4,
            width: 24,
            height: 24
        };
        _this.cellHeadStyle = {
            margin: 4,
            paddingLeft: 4,
            paddingRight: 16,
            height: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        };
        _this.toggleHeadStyle = {
            color: context.muiTheme.palette.primary1Color,
            fontSize: context.muiTheme.flatButton.fontSize
        };
        /*this.state = {
            isOpen: props.open()[props.settingsName],
         };*/

        _this.toggleOpen = _this.toggleOpen.bind(_this);
        _this.inputValue = _this.inputValue.bind(_this);
        _this.renderProp = _this.renderProp.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ThemePropTable, [{
        key: 'toggleOpen',
        value: function toggleOpen(e) {
            /*const collapseList = this.props.open();
            collapseList[this.props.settingsName] = !this.state.isOpen;
            this.props.open(collapseList);
            this.setState({isOpen : !this.state.isOpen})*/

            this.props.open(!this.props.open());
            this.forceUpdate();
        }
    }, {
        key: 'inputValue',
        value: function inputValue(propName) {
            var _this2 = this;

            return function (event) {
                _this2.props.onThemeTableOverride(propName, event.target.value);
                /*let overObj = this.props.override();
                if(overObj == undefined) {
                    overObj = {}
                }
                console.log(overObj);
                console.info(`${propName} = ${event.target.value}`)
                overObj[propName] = event.target.value;
                this.props.override(overObj);
                */
            };
        }
    }, {
        key: 'renderProp',
        value: function renderProp(val, ind) {
            return _react2.default.createElement(PropRow, {
                key: val,
                val: val,
                ind: ind,
                settingsObj: this.props.settingsObj,
                inputValue: this.inputValue,
                isCollapsed: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            //        console.log(`${this.props.settingsName} ${this.props.open()}`)
            var settingsObj = this.props.settingsObj;

            var keyList = (0, _keys2.default)(settingsObj);
            var rowList = keyList.map(function (val, ind) {
                return _this3.renderProp(val, ind);
            });

            return _react2.default.createElement(
                _Paper2.default,
                { style: { marginTop: 6, paddingTop: 5, paddingBottom: 5 } },
                _react2.default.createElement(
                    _Card.CardText,
                    { style: { paddingTop: this.props.open() ? 10 : 1, paddingBottom: 1 } },
                    _react2.default.createElement(
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
                                { onTouchTap: copyToClipboard(this.props.settingsName) },
                                _react2.default.createElement(
                                    _Avatar2.default,
                                    { size: 18 },
                                    this.props.settingsName[0]
                                ),
                                this.props.settingsName
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_Toggle2.default, {
                                label: '',
                                labelPosition: 'right',
                                labelStyle: this.toggleHeadStyle,
                                toggled: this.props.open() || false /* this.state.isOpen*/,
                                onToggle: this.toggleOpen
                            })
                        )
                    ),
                    this.props.open() ? _react2.default.createElement(
                        _Table.Table,
                        { selectable: false },
                        _react2.default.createElement(
                            _Table.TableHeader,
                            {
                                displaySelectAll: false,
                                adjustForCheckbox: false
                            },
                            _react2.default.createElement(
                                _Table.TableRow,
                                { style: { height: 32 } },
                                _react2.default.createElement(
                                    _Table.TableHeaderColumn,
                                    { style: this.cellIndStyle },
                                    ' # '
                                ),
                                _react2.default.createElement(
                                    _Table.TableHeaderColumn,
                                    { style: this.cellStyle },
                                    ' Name '
                                ),
                                _react2.default.createElement(
                                    _Table.TableHeaderColumn,
                                    { style: this.cellStyle },
                                    ' Value '
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _Table.TableBody,
                            {

                                displayRowCheckbox: false
                            },
                            rowList
                        )
                    ) : null
                )
            );
        }
    }]);
    return ThemePropTable;
}(_react2.default.Component);

exports.default = ThemePropTable;


ThemePropTable.propTypes = propTypes;

ThemePropTable.contextTypes = {
    muiTheme: _react2.default.PropTypes.object.isRequired
};

function copyToClipboard(text) {
    return function () {
        var textElem = document.createElement('textarea');
        document.body.appendChild(textElem);
        textElem.value = text;
        textElem.select();

        var successful = void 0;
        try {
            // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
            successful = document.execCommand('copy');
            //        const res = successful ? 'successful' : 'unsuccessful';
        } catch (err) {
            console.log('cant copy to clipboard');
        }
        textElem.remove();
        return successful;
    };
}

var PropRow = function (_React$Component2) {
    (0, _inherits3.default)(PropRow, _React$Component2);

    function PropRow(props) {
        (0, _classCallCheck3.default)(this, PropRow);

        var _this4 = (0, _possibleConstructorReturn3.default)(this, (PropRow.__proto__ || (0, _getPrototypeOf2.default)(PropRow)).call(this, props));

        _this4.state = {
            isCollapsed: props.isCollapsed
        };

        _this4.cellStyle = {
            margin: 4,
            padding: 4,
            height: 24
        };
        _this4.cellIndStyle = {
            margin: 4,
            padding: 4,
            width: 15,
            height: 24
        };
        _this4.cellTollStyle = {
            margin: 4,
            padding: 4,
            width: 24,
            height: 24
        };
        _this4.tabStyle = { height: 16, marginTop: -12, fontSize: 12 };

        _this4.onSwitch = _this4.onSwitch.bind(_this4);
        _this4.renderPropCollapse = _this4.renderPropCollapse.bind(_this4);
        _this4.renderPropExpanded = _this4.renderPropExpanded.bind(_this4);
        _this4.renderE = _this4.renderE.bind(_this4);
        return _this4;
    }

    (0, _createClass3.default)(PropRow, [{
        key: 'onSwitch',
        value: function onSwitch() {
            this.setState({ isCollapsed: !this.state.isCollapsed });
        }
    }, {
        key: 'renderPropCollapse',
        value: function renderPropCollapse(val, ind) {
            var settingsObj = this.props.settingsObj;
            var context = this.context;
            return _react2.default.createElement(
                _Table.TableRow,
                {
                    key: val,
                    style: {
                        verticalAlign: 'top'
                    }
                },
                _react2.default.createElement(
                    _Table.TableRowColumn,
                    { style: this.cellIndStyle },
                    ind + 1
                ),
                _react2.default.createElement(
                    _Table.TableRowColumn,
                    { style: this.cellStyle },
                    _react2.default.createElement(
                        'div',
                        { title: val },
                        val
                    )
                ),
                _react2.default.createElement(
                    _Table.TableRowColumn,
                    {
                        style: (0, _extends3.default)({}, this.cellStyle, {
                            overflow: this.state.isCollapsed ? 'hidden' : 'visible'
                        })
                    },
                    /*this.state.isCollapsed ?*/
                    _react2.default.createElement('input', {
                        type: 'text',
                        onChange: this.props.inputValue(val),
                        value: settingsObj[val],
                        title: settingsObj[val],
                        style: {
                            border: 'none',
                            width: '100%',
                            fontStyle: 'italic',
                            //                          paddingTop: 4,
                            paddingBottom: 4,
                            //                          marginTop: 4,
                            backgroundColor: context.muiTheme.palette.canvasColor,
                            color: context.muiTheme.palette.textColor
                        }
                    }) /*: null*/,
                    this.renderE(val, ind)
                ),
                _react2.default.createElement(
                    _Table.TableRowColumn,
                    { style: this.cellTollStyle },
                    _react2.default.createElement('div', {
                        onTouchTap: this.onSwitch,
                        style: {
                            border: '1px solid grey',
                            width: 16,
                            height: 16,
                            background: settingsObj[val]
                        }
                    })
                )
            );
        }
    }, {
        key: 'renderE',
        value: function renderE(val, ind) {
            var settingsObj = this.props.settingsObj;
            var context = this.context;
            return _react2.default.createElement(
                'div',
                { style: {
                        height: this.state.isCollapsed ? 2 : 226,
                        transition: 'height 200ms linear 0ms',
                        width: 360,
                        marginLeft: -183,
                        marginTop: 0,
                        position: 'relative',
                        overflow: 'hidden'
                    },
                    className: _.CSS_CLASS + '-proptable-expand'
                },
                !this.state.isCollapsed ? _react2.default.createElement(
                    _Paper2.default,
                    {
                        style: {
                            height: 208,
                            width: 356,
                            marginTop: 8,
                            backgroundColor: context.muiTheme.palette.canvasColor,
                            border: '1px red solid',
                            borderColor: context.muiTheme.palette.borderColor
                        }
                    },
                    _react2.default.createElement(
                        'div',
                        { style: {
                                height: 20,
                                padding: 2,
                                backgroundColor: context.muiTheme.palette.primary3Color,
                                color: context.muiTheme.palette.secondaryTextColor,
                                display: 'flex',
                                justifyContent: 'space-between'
                            } },
                        _react2.default.createElement(
                            'div',
                            { style: { padding: 3, marginLeft: 0 } },
                            _react2.default.createElement(
                                'b',
                                null,
                                val + ' = ' + settingsObj[val]
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { id: 'button' },
                            _react2.default.createElement(
                                _IconButton2.default,
                                {

                                    style: { padding: 2, height: 24, width: 24 },
                                    onTouchTap: this.onSwitch
                                },
                                ' ',
                                _react2.default.createElement(_checkCircle2.default, {
                                    color: context.muiTheme.palette.secondaryTextColor,
                                    hoverColor: context.muiTheme.palette.textColor,
                                    viewBox: '0 0 32 32'
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Tabs.Tabs,
                        {
                            tabItemContainerStyle: { height: 24 }
                        },
                        _react2.default.createElement(
                            _Tabs.Tab,
                            { label: 'Color',
                                style: this.tabStyle },
                            _react2.default.createElement(_reactMaterialColorPicker2.default, {
                                initColor: settingsObj[val],
                                onSubmit: this.props.inputValue(val)
                            })
                        ),
                        _react2.default.createElement(
                            _Tabs.Tab,
                            { label: 'Number', style: this.tabStyle },
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
                                style: this.tabStyle
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
                            { label: 'Palette', style: this.tabStyle },
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
                            { label: 'Icon', style: this.tabStyle },
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
                ) : null
            );
        }
    }, {
        key: 'renderPropExpanded',
        value: function renderPropExpanded(val, ind) {
            var settingsObj = this.props.settingsObj;
            return _react2.default.createElement(
                _Table.TableRow,
                {
                    style: { height: '' }
                },
                _react2.default.createElement(
                    _Table.TableHeaderColumn,
                    { colSpan: '4', style: { padding: 0 } },
                    _react2.default.createElement(
                        'div',
                        { style: { height: 200, backgroundColor: '#ebebeb' } },
                        _react2.default.createElement(
                            'div',
                            { style: {
                                    height: 20,
                                    backgroundColor: '#bebebe',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                } },
                            _react2.default.createElement(
                                'div',
                                null,
                                ind + 1 + ' ' + val + ' = ' + settingsObj[val]
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'button' },
                                _react2.default.createElement(
                                    _IconButton2.default,
                                    {
                                        tooltip: 'Collapse',
                                        tooltipPosition: 'bottom-left',
                                        style: { padding: 2, height: 24, width: 24 },
                                        onTouchTap: this.onSwitch
                                    },
                                    _react2.default.createElement(_checkCircle2.default, {
                                        viewBox: '0 0 32 32'
                                    })
                                )
                            )
                        ),
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic possimus officia, eveniet reiciendis eaque tempora, quae, rerum accusantium ipsam fugiat architecto quos consectetur autem similique? Magni, vero. Nam, consectetur optio.'
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderPropCollapse(this.props.val, this.props.ind);
            //        return (this.state.isCollapsed ?
            //                    this.renderPropCollapse(this.props.val, this.props.ind) :
            //                    this.renderPropExpanded(this.props.val, this.props.ind)
            //               )
        }
    }]);
    return PropRow;
}(_react2.default.Component);

PropRow.contextTypes = {
    muiTheme: _react2.default.PropTypes.object.isRequired
};
