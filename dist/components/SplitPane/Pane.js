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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pane = function (_Component) {
    (0, _inherits3.default)(Pane, _Component);

    function Pane() {
        var _ref;

        (0, _classCallCheck3.default)(this, Pane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Pane.__proto__ || (0, _getPrototypeOf2.default)(Pane)).call.apply(_ref, [this].concat(args)));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Pane, [{
        key: 'render',
        value: function render() {
            var split = this.props.split;
            var classes = ['Pane', split, this.props.className];

            var style = (0, _assign2.default)({}, this.props.style || {}, {
                flex: 1,
                position: 'relative',
                outline: 'none'
            });

            if (this.state.size !== undefined) {
                if (split === 'vertical') {
                    style.width = this.state.size;
                } else {
                    style.height = this.state.size;
                    style.display = 'flex';
                }
                style.flex = 'none';
            }

            return _react2.default.createElement(
                'div',
                { className: classes.join(' '), style: style },
                this.props.children
            );
        }
    }]);
    return Pane;
}(_react.Component);

Pane.propTypes = {
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    className: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.object.isRequired,
    style: _react.PropTypes.object
};

exports.default = Pane;
