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

var Resizer = function (_Component) {
    (0, _inherits3.default)(Resizer, _Component);

    function Resizer() {
        var _ref;

        (0, _classCallCheck3.default)(this, Resizer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Resizer.__proto__ || (0, _getPrototypeOf2.default)(Resizer)).call.apply(_ref, [this].concat(args)));

        _this.onMouseDown = _this.onMouseDown.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Resizer, [{
        key: 'onMouseDown',
        value: function onMouseDown(event) {
            this.props.onMouseDown(event);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var split = _props.split;
            var className = _props.className;

            var classes = ['Resizer', split, className];
            return _react2.default.createElement(
                'div',
                {
                    className: classes.join(' '),
                    onMouseDown: this.onMouseDown
                },
                _react2.default.createElement('div', {
                    style: {
                        left: 8,
                        position: 'relative',
                        width: 16,
                        height: '100%',
                        zIndex: 10,
                        backgroundColor: 'rgba(175, 175, 175, 0)',
                        cursor: 'col-resize'
                    }
                })
            );
        }
    }]);
    return Resizer;
}(_react.Component);

Resizer.propTypes = {
    onMouseDown: _react.PropTypes.func.isRequired,
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    className: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.object
};

exports.default = Resizer;