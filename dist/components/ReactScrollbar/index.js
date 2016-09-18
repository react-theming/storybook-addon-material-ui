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

var _verticalScrollbar = require('./vertical-scrollbar.js');

var _verticalScrollbar2 = _interopRequireDefault(_verticalScrollbar);

var _horizontalScrollbar = require('./horizontal-scrollbar.js');

var _horizontalScrollbar2 = _interopRequireDefault(_horizontalScrollbar);

require('!style!css!sass!./react-scrollbar.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// sass!

var ScrollWrapper = function (_React$Component) {
    (0, _inherits3.default)(ScrollWrapper, _React$Component);

    function ScrollWrapper() {
        (0, _classCallCheck3.default)(this, ScrollWrapper);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ScrollWrapper.__proto__ || (0, _getPrototypeOf2.default)(ScrollWrapper)).call(this));

        _this.state = {
            ready: false,
            scrollY: null,
            scrollX: null,
            top: 0,
            left: 0,
            scrollAreaHeight: null,
            scrollAreaWidth: null,
            scrollWrapperHeight: null,
            scrollWrapperWidth: null,
            verticalHeight: null,
            vMovement: 0,
            hMovement: 0,
            dragging: false, // note: dragging - fake pseudo class
            scrolling: false, // changes: scrolling (new fake pseudo class)
            reset: false, // changes: change state without rendering
            start: { y: 0, x: 0 }
        };
        return _this;
    }

    // changes: update scrollbars when parent resizing


    (0, _createClass3.default)(ScrollWrapper, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.calculateSize.bind(this)();
        }

        // changes: reset settings without rerendering (need for scrolling state)

    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            if (nextState.reset) {
                this.setState({ reset: false });
                return false;
            }
            return true;
        }
    }, {
        key: 'render',
        value: function render() {
            var className = function className(base, name, pos, isDrg, isScr) {
                return [base + name, base + name + pos, isDrg ? base + name + ':dragging' : '', isDrg ? base + name + pos + ':dragging' : '', isScr ? base + name + ':scrolling' : '', isScr ? base + name + pos + ':scrolling' : ''].join(' ');
            };

            return _react2.default.createElement(
                'div',
                {
                    onClick: this.calculateSize.bind(this),
                    className: this.props.className,
                    ref: 'scrollWrapper',
                    style: (0, _extends3.default)({}, this.props.style, { overflow: 'hidden', position: 'relative' })
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: className('-reactjs-scrollbar', '-area', '', this.state.dragging, this.state.scrolling),
                        ref: 'scrollArea',
                        onWheel: this.scroll.bind(this),
                        onTouchStart: this.startDrag.bind(this),
                        onTouchMove: this.onDrag.bind(this),
                        onTouchEnd: this.stopDrag.bind(this),
                        onChange: this.calculateSize.bind(this),
                        style: { marginTop: this.state.top * -1 + 'px', marginLeft: this.state.left * -1 + 'px' }
                    },
                    this.props.children,
                    this.state.ready ? _react2.default.createElement(_verticalScrollbar2.default, {
                        area: { height: this.state.scrollAreaHeight },
                        wrapper: { height: this.state.scrollWrapperHeight },
                        scrolling: this.state.vMovement,
                        draggingFromParent: this.state.dragging,
                        onChangePosition: this.handleChangePosition.bind(this),
                        onDragging: this.handleScrollbarDragging.bind(this),
                        onStopDrag: this.handleScrollbarStopDrag.bind(this)
                    }) : null,
                    this.state.ready ? _react2.default.createElement(_horizontalScrollbar2.default, {
                        area: { width: this.state.scrollAreaWidth },
                        wrapper: { width: this.state.scrollWrapperWidth },
                        scrolling: this.state.hMovement,
                        draggingFromParent: this.state.dragging,
                        onChangePosition: this.handleChangePosition.bind(this),
                        onDragging: this.handleScrollbarDragging.bind(this),
                        onStopDrag: this.handleScrollbarStopDrag.bind(this)
                    }) : null
                )
            );
        }
    }, {
        key: 'scroll',
        value: function scroll(e) {
            var _this2 = this;

            e.preventDefault();

            // Make sure the content height is not changed
            this.calculateSize(function () {
                // Set the wheel step
                var num = _this2.props.speed;

                // DOM events
                var shifted = e.shiftKey;
                var scrollY = e.deltaY > 0 ? num : -num;
                var scrollX = e.deltaX > 0 ? num : -num;

                // Fix Mozilla Shifted Wheel~
                if (shifted && e.deltaX == 0) scrollX = e.deltaY > 0 ? num : -num;

                // Next Value
                var nextY = _this2.state.top + scrollY;
                var nextX = _this2.state.left + scrollX;

                // Is it Scrollable?
                var canScrollY = _this2.state.scrollAreaHeight > _this2.state.scrollWrapperHeight;
                var canScrollX = _this2.state.scrollAreaWidth > _this2.state.scrollWrapperWidth;

                // changes: Set scrolling state before changing position
                _this2.setState({ scrolling: true }, function () {
                    // Vertical Scrolling
                    if (canScrollY && !shifted) _this2.normalizeVertical(nextY, { scrolling: false, reset: true });

                    // Horizontal Scrolling
                    if (shifted && canScrollX) _this2.normalizeHorizontal(nextX, { scrolling: false, reset: true });
                });
            });
        }

        // DRAG EVENT JUST FOR TOUCH DEVICE~

    }, {
        key: 'startDrag',
        value: function startDrag(e) {
            var _this3 = this;

            e.preventDefault();
            e.stopPropagation();

            e = e.changedTouches ? e.changedTouches[0] : e;

            // Make sure the content height is not changed
            this.calculateSize(function () {
                // Prepare to drag
                _this3.setState({
                    dragging: true,
                    start: { y: e.pageY, x: e.pageX }
                });
            });
        }
    }, {
        key: 'onDrag',
        value: function onDrag(e) {
            if (this.state.dragging) {
                e.preventDefault();
                e = e.changedTouches ? e.changedTouches[0] : e;

                // Invers the Movement
                var yMovement = this.state.start.y - e.pageY;
                var xMovement = this.state.start.x - e.pageX;

                // Update the last e.page
                this.setState({ start: { y: e.pageY, x: e.pageX } });

                // The next Vertical Value will be
                var nextY = this.state.top + yMovement;
                var nextX = this.state.left + xMovement;

                this.normalizeVertical(nextY);
                this.normalizeHorizontal(nextX);
            }
        }
    }, {
        key: 'stopDrag',
        value: function stopDrag(e) {
            this.setState({ dragging: false });
        }
    }, {
        key: 'normalizeVertical',
        value: function normalizeVertical(next, nextState) {
            var _this4 = this;

            // Vertical Scrolling
            var lowerEnd = this.state.scrollAreaHeight - this.state.scrollWrapperHeight;

            // Max Scroll Down
            if (next > lowerEnd) next = lowerEnd;

            // Max Scroll Up
            else if (next < 0) next = 0;

            // Update the Vertical Value
            this.setState({
                top: next,
                vMovement: next / this.state.scrollAreaHeight * 100
            }, function () {
                return _this4.setState((0, _extends3.default)({}, nextState));
            }); // changes: update state after operation
        }
    }, {
        key: 'normalizeHorizontal',
        value: function normalizeHorizontal(next, nextState) {
            var _this5 = this;

            // Horizontal Scrolling
            var rightEnd = this.state.scrollAreaWidth - this.state.scrollWrapperWidth;

            // Max Scroll Right
            if (next > rightEnd) next = rightEnd;

            // Max Scroll Right
            else if (next < 0) next = 0;

            // Update the Horizontal Value
            this.setState({
                left: next,
                hMovement: next / this.state.scrollAreaWidth * 100
            }, function () {
                return _this5.setState((0, _extends3.default)({}, nextState));
            }); // changes: update state after operation
        }
    }, {
        key: 'handleChangePosition',
        value: function handleChangePosition(movement, orientation) {
            var _this6 = this;

            // Make sure the content height is not changed
            this.calculateSize(function () {
                // Convert Percentage to Pixel
                var next = movement / 100;
                if (orientation == 'vertical') _this6.normalizeVertical(next * _this6.state.scrollAreaHeight);
                if (orientation == 'horizontal') _this6.normalizeHorizontal(next * _this6.state.scrollAreaWidth);
            });
        }
    }, {
        key: 'handleScrollbarDragging',
        value: function handleScrollbarDragging() {
            this.setState({ dragging: true });
        }
    }, {
        key: 'handleScrollbarStopDrag',
        value: function handleScrollbarStopDrag() {
            this.setState({ dragging: false });
        }
    }, {
        key: 'getSize',
        value: function getSize() {
            // The Elements
            var $scrollArea = this.refs.scrollArea;
            var $scrollWrapper = this.refs.scrollWrapper;

            // Get new Elements Size
            var elementSize = {
                // Scroll Area Height and Width

                scrollAreaHeight: $scrollArea.getBoundingClientRect().height, // changes: support margin and no one child
                scrollAreaWidth: $scrollArea.children[0].clientWidth, // fixme: not working same way

                // Scroll Wrapper Height and Width
                scrollWrapperHeight: $scrollWrapper.clientHeight,
                scrollWrapperWidth: $scrollWrapper.clientWidth
            };

            return elementSize;
        }
    }, {
        key: 'calculateSize',
        value: function calculateSize(cb) {
            // todo: check performance
            if (typeof cb != 'function') cb = null;
            var elementSize = this.getSize();

            if (elementSize.scrollWrapperHeight != this.state.scrollWrapperHeight || elementSize.scrollWrapperWidth != this.state.scrollWrapperWidth || elementSize.scrollAreaHeight != this.state.scrollAreaHeight || elementSize.scrollAreaWidth != this.state.scrollAreaWidth) {
                // Set the State!
                this.setState({

                    // Scroll Area Height and Width
                    scrollAreaHeight: elementSize.scrollAreaHeight,
                    scrollAreaWidth: elementSize.scrollAreaWidth,

                    // Scroll Wrapper Height and Width
                    scrollWrapperHeight: elementSize.scrollWrapperHeight,
                    scrollWrapperWidth: elementSize.scrollWrapperWidth,

                    // Make sure The wrapper is Ready, then render the scrollbar
                    ready: true
                }, function () {
                    return cb ? cb() : false;
                });
            } else return cb ? cb() : false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.calculateSize();

            // Attach The Event for Responsive View~
            window.addEventListener('resize', this.calculateSize.bind(this));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Remove Event
            window.removeEventListener('resize', this.calculateSize.bind(this));
        }
    }]);
    return ScrollWrapper;
}(_react2.default.Component);

// The Props


ScrollWrapper.propTypes = {
    speed: _react2.default.PropTypes.number,
    className: _react2.default.PropTypes.string,
    style: _react2.default.PropTypes.object
};

ScrollWrapper.defaultProps = {
    speed: 53,
    className: '',
    style: {}
};

exports.default = ScrollWrapper;
