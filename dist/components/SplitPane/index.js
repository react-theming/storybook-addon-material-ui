'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Pane = require('./Pane');

var _Pane2 = _interopRequireDefault(_Pane);

var _Resizer = require('./Resizer');

var _Resizer2 = _interopRequireDefault(_Resizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SplitPane = function (_Component) {
    (0, _inherits3.default)(SplitPane, _Component);

    function SplitPane() {
        var _ref;

        (0, _classCallCheck3.default)(this, SplitPane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = SplitPane.__proto__ || (0, _getPrototypeOf2.default)(SplitPane)).call.apply(_ref, [this].concat(args)));

        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);

        _this.state = {
            active: false,
            resized: false
        };
        return _this;
    }

    (0, _createClass3.default)(SplitPane, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setSize(this.props, this.state);
            document.addEventListener('mouseup', this.onMouseUp);
            document.addEventListener('mousemove', this.onMouseMove);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setSize(props, this.state);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mouseup', this.onMouseUp);
            document.removeEventListener('mousemove', this.onMouseMove);
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown(event) {
            if (this.props.allowResize && !this.props.size) {
                this.unFocus();
                var position = this.props.split === 'vertical' ? event.clientX : event.clientY;
                if (typeof this.props.onDragStarted === 'function') {
                    this.props.onDragStarted();
                }
                this.setState({
                    active: true,
                    position: position
                });
            }
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(event) {
            if (this.props.allowResize && !this.props.size) {
                if (this.state.active) {
                    this.unFocus();
                    var isPrimaryFirst = this.props.primary === 'first';
                    var ref = isPrimaryFirst ? this.pane1 : this.pane2;
                    if (ref) {
                        var node = _reactDom2.default.findDOMNode(ref);

                        if (node.getBoundingClientRect) {
                            var width = node.getBoundingClientRect().width;
                            var height = node.getBoundingClientRect().height;
                            var current = this.props.split === 'vertical' ? event.clientX : event.clientY;
                            var size = this.props.split === 'vertical' ? width : height;
                            var position = this.state.position;
                            var newPosition = isPrimaryFirst ? position - current : current - position;

                            var maxSize = this.props.maxSize;
                            if (this.props.maxSize !== undefined && this.props.maxSize <= 0) {
                                var splPane = this.splitPane;
                                if (this.props.split === 'vertical') {
                                    maxSize = splPane.getBoundingClientRect().width + this.props.maxSize;
                                } else {
                                    maxSize = splPane.getBoundingClientRect().height + this.props.maxSize;
                                }
                            }

                            var newSize = size - newPosition;

                            if (newSize < this.props.minSize) {
                                newSize = this.props.minSize;
                            } else if (this.props.maxSize !== undefined && newSize > maxSize) {
                                newSize = maxSize;
                            } else {
                                this.setState({
                                    position: current,
                                    resized: true
                                });
                            }

                            if (this.props.onChange) {
                                this.props.onChange(newSize);
                            }
                            this.setState({
                                draggedSize: newSize
                            });
                            ref.setState({
                                size: newSize
                            });
                        }
                    }
                }
            }
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp() {
            if (this.props.allowResize && !this.props.size) {
                if (this.state.active) {
                    if (typeof this.props.onDragFinished === 'function') {
                        this.props.onDragFinished();
                    }
                    this.setState({
                        active: false
                    });
                }
            }
        }
    }, {
        key: 'setSize',
        value: function setSize(props, state) {
            var ref = this.props.primary === 'first' ? this.pane1 : this.pane2;
            var newSize = void 0;
            if (ref) {
                newSize = props.size || state && state.draggedSize || props.defaultSize || props.minSize;
                ref.setState({
                    size: newSize
                });
            }
        }
    }, {
        key: 'unFocus',
        value: function unFocus() {
            if (document.selection) {
                document.selection.empty();
            } else {
                window.getSelection().removeAllRanges();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var split = _props.split;
            var allowResize = _props.allowResize;

            var disabledClass = allowResize ? '' : 'disabled';

            var style = (0, _assign2.default)({}, this.props.style || {}, {
                display: 'flex',
                flex: 1,
                position: 'relative',
                outline: 'none',
                overflow: 'hidden',
                MozUserSelect: 'text',
                WebkitUserSelect: 'text',
                msUserSelect: 'text',
                userSelect: 'text'
            });

            if (split === 'vertical') {
                (0, _assign2.default)(style, {
                    flexDirection: 'row',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    right: 0
                });
            } else {
                (0, _assign2.default)(style, {
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '100%',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    width: '100%'
                });
            }

            var children = this.props.children;
            var classes = ['SplitPane', this.props.className, split, disabledClass];

            var pane1Style = (0, _assign2.default)({}, this.props.paneStyle || {}, this.props.pane1Style || {});
            var pane2Style = (0, _assign2.default)({}, this.props.paneStyle || {}, this.props.pane2Style || {});

            return _react2.default.createElement(
                'div',
                { className: classes.join(' '), style: style, ref: function ref(node) {
                        _this2.splitPane = node;
                    } },
                _react2.default.createElement(
                    _Pane2.default,
                    {
                        ref: function ref(node) {
                            _this2.pane1 = node;
                        },
                        key: 'pane1', className: 'Pane1',
                        style: pane1Style,
                        split: split
                    },
                    children[0]
                ),
                _react2.default.createElement(_Resizer2.default, {
                    ref: function ref(node) {
                        _this2.resizer = node;
                    },
                    key: 'resizer',
                    className: disabledClass,
                    onMouseDown: this.onMouseDown,
                    style: this.props.resizerStyle || {},
                    split: split
                }),
                _react2.default.createElement(
                    _Pane2.default,
                    {
                        ref: function ref(node) {
                            _this2.pane2 = node;
                        },
                        key: 'pane2',
                        className: 'Pane2',
                        style: pane2Style,
                        split: split
                    },
                    children[1]
                )
            );
        }
    }]);
    return SplitPane;
}(_react.Component);

SplitPane.propTypes = {
    primary: _react.PropTypes.oneOf(['first', 'second']),
    minSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    maxSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    defaultSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    size: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    allowResize: _react.PropTypes.bool,
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    onDragStarted: _react.PropTypes.func,
    onDragFinished: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    style: _react.PropTypes.object,
    resizerStyle: _react.PropTypes.object,
    paneStyle: _react.PropTypes.object,
    pane1Style: _react.PropTypes.object,
    pane2Style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired
};

SplitPane.defaultProps = {
    split: 'vertical',
    minSize: 50,
    allowResize: true,
    primary: 'first'
};

exports.default = SplitPane;
