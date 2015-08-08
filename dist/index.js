'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.el = el;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Iconic = require('./Iconic');

Object.defineProperty(exports, 'Iconic', {
  enumerable: true,
  get: function get() {
    return _Iconic.Iconic;
  }
});
exports.iconic = _interopRequire(_Iconic);

// Dom Elements
var div = _react2['default'].createFactory('div');
exports.div = div;
var span = _react2['default'].createFactory('span');
exports.span = span;
var b = _react2['default'].createFactory('b');
exports.b = b;
var img = _react2['default'].createFactory('img');

exports.img = img;
/*
 * Shorthand for React.createElement
 */

function el(component) {
  var props = arguments[1] === undefined ? null : arguments[1];
  var children = arguments[2] === undefined ? null : arguments[2];

  return _react2['default'].createElement(component, props, children);
}