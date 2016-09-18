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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalScrollbar = function (_React$Component) {
  (0, _inherits3.default)(VerticalScrollbar, _React$Component);

  function VerticalScrollbar() {
    (0, _classCallCheck3.default)(this, VerticalScrollbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (VerticalScrollbar.__proto__ || (0, _getPrototypeOf2.default)(VerticalScrollbar)).call(this));

    _this.state = {
      height: 0,
      dragging: false,
      start: 0
    };
    return _this;
  }

  (0, _createClass3.default)(VerticalScrollbar, [{
    key: 'render',
    value: function render() {
      var className = function className(base, name, pos, act, isAct) {
        return [base + name, base + name + pos, isAct ? base + name + act : '', isAct ? base + name + pos + act : ''].join(' ');
      };
      if (this.state.height < 100) return _react2.default.createElement(
        'div',
        {
          className: className('-reactjs-scrollbar', '-track', ':vertical', ':dragging', this.state.dragging || this.props.draggingFromParent),
          ref: 'container',
          onClick: this.jump.bind(this),
          style: { position: 'absolute' } },
        _react2.default.createElement('div', {
          className: className('-reactjs-scrollbar', '-thumb', ':vertical', ':dragging', this.state.dragging || this.props.draggingFromParent),
          ref: 'scrollbar',
          onTouchStart: this.startDrag.bind(this),
          onMouseDown: this.startDrag.bind(this),
          style: {
            position: 'relative',
            height: this.state.height + '%',
            top: this.props.scrolling + '%'
          } })
      );else return null;
    }
  }, {
    key: 'startDrag',
    value: function startDrag(e) {

      e.preventDefault();
      e.stopPropagation();

      e = e.changedTouches ? e.changedTouches[0] : e;

      // Prepare to drag
      this.setState({
        dragging: true,
        start: e.clientY
      });
    }
  }, {
    key: 'onDrag',
    value: function onDrag(e) {
      var _this2 = this;

      if (this.state.dragging) {
        (function () {

          // Make The Parent being in the Dragging State
          _this2.props.onDragging();

          e.preventDefault();
          e.stopPropagation();

          e = e.changedTouches ? e.changedTouches[0] : e;

          var yMovement = e.clientY - _this2.state.start;
          var yMovementPercentage = yMovement / _this2.props.wrapper.height * 100;

          // Update the last e.clientY
          _this2.setState({ start: e.clientY }, function () {

            // The next Vertical Value will be
            var next = _this2.props.scrolling + yMovementPercentage;

            // Tell the parent to change the position
            _this2.props.onChangePosition(next, 'vertical');
          });
        })();
      }
    }
  }, {
    key: 'stopDrag',
    value: function stopDrag(e) {
      if (this.state.dragging) {
        // Parent Should Change the Dragging State
        this.props.onStopDrag();
        this.setState({ dragging: false });
      }
    }
  }, {
    key: 'jump',
    value: function jump(e) {
      var _this3 = this;

      var isContainer = e.target === this.refs.container;

      if (isContainer) {
        (function () {

          // Get the Element Position
          var position = _this3.refs.scrollbar.getBoundingClientRect();

          // Calculate the vertical Movement
          var yMovement = e.clientY - position.top;
          var centerize = _this3.state.height / 2;
          var yMovementPercentage = yMovement / _this3.props.wrapper.height * 100 - centerize;

          // Update the last e.clientY
          _this3.setState({ start: e.clientY }, function () {

            // The next Vertical Value will be
            var next = _this3.props.scrolling + yMovementPercentage;

            // Tell the parent to change the position
            _this3.props.onChangePosition(next, 'vertical');
          });
        })();
      }
    }
  }, {
    key: 'calculateSize',
    value: function calculateSize(source) {
      // Scrollbar Height
      this.setState({ height: source.wrapper.height / source.area.height * 100 });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.wrapper.height !== this.props.wrapper.height || nextProps.area.height !== this.props.area.height) this.calculateSize(nextProps);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.calculateSize(this.props);

      // Put the Listener
      document.addEventListener("mousemove", this.onDrag.bind(this));
      document.addEventListener("touchmove", this.onDrag.bind(this));
      document.addEventListener("mouseup", this.stopDrag.bind(this));
      document.addEventListener("touchend", this.stopDrag.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Remove the Listener
      document.removeEventListener("mousemove", this.onDrag.bind(this));
      document.removeEventListener("touchmove", this.onDrag.bind(this));
      document.removeEventListener("mouseup", this.stopDrag.bind(this));
      document.removeEventListener("touchend", this.stopDrag.bind(this));
    }
  }]);
  return VerticalScrollbar;
}(_react2.default.Component);

exports.default = VerticalScrollbar;
