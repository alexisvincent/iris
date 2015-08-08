'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Iconic = (function (_React$Component) {
	function Iconic() {
		_classCallCheck(this, Iconic);

		_get(Object.getPrototypeOf(Iconic.prototype), 'constructor', this).apply(this, arguments);
	}

	_inherits(Iconic, _React$Component);

	_createClass(Iconic, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			iconic.inject(_react2['default'].findDOMNode(this));
		}
	}, {
		key: 'getIconClasses',
		value: function getIconClasses() {
			if (typeof this.props.icon === 'string') {
				return 'iconic iconic-fluid';
			}
			return 'iconic iconic-fluid ' + this.props.icon.className;
		}
	}, {
		key: 'getIconState',
		value: function getIconState() {
			if (typeof this.props.icon === 'string' || !this.props.icon.state) {
				return '';
			}
			var state = this.props.icon.state;
			var ret = {};
			Object.keys(state).map(function (key) {
				ret['data-' + key] = state[key];
			});
			return ret;
		}
	}, {
		key: 'getIconSrc',
		value: function getIconSrc() {
			if (typeof this.props.icon === 'string') {
				return './iconic/' + this.props.icon + '.svg';
			}
			return './iconic/' + this.props.icon.name + '.svg';
		}
	}, {
		key: 'render',
		value: function render() {
			var data = this.getIconState();
			var bg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
			return _react2['default'].DOM.img(_react2['default'].__spread({
				'className': this.getIconClasses(),
				'data-src': this.getIconSrc(),
				'src': bg
			}, data));
		}
	}], [{
		key: 'propTypes',
		value: {
			icon: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.shape({
				state: _react2['default'].PropTypes.object,
				name: _react2['default'].PropTypes.string
			})]).isRequired
		},
		enumerable: true
	}, {
		key: 'defaultProps',
		value: {
			style: {}
		},
		enumerable: true
	}]);

	return Iconic;
})(_react2['default'].Component);

exports.Iconic = Iconic;
exports['default'] = _react2['default'].createFactory(Iconic);