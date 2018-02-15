'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 *  Fade out and in on mount and unmount.
 */

var Fade = function Fade(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _reactTransitionGroup.CSSTransition,
    _extends({}, props, {
      timeout: 200,
      unmountOnExit: true,
      classNames: 'fade'
    }),
    children
  );
};

exports.default = Fade;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmFkZS5qc3giXSwibmFtZXMiOlsiRmFkZSIsImNoaWxkcmVuIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7OztBQUlBLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWdCQyxLQUFoQjs7QUFBQSxTQUNaO0FBQUE7QUFBQSxpQkFDTUEsS0FETjtBQUVFLGVBQVMsR0FGWDtBQUdFLHFCQUFlLElBSGpCO0FBSUUsa0JBQVc7QUFKYjtBQU1FRDtBQU5GLEdBRFk7QUFBQSxDQUFiOztrQkFXZUQsSSIsImZpbGUiOiJjb21wb25lbnRzL0ZhZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG5cbi8qKlxuICogIEZhZGUgb3V0IGFuZCBpbiBvbiBtb3VudCBhbmQgdW5tb3VudC5cbiAqL1xuXG5jb25zdCBGYWRlID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiA8Q1NTVHJhbnNpdGlvblxuICAgey4uLnByb3BzfVxuICAgdGltZW91dD17MjAwfVxuICAgdW5tb3VudE9uRXhpdD17dHJ1ZX1cbiAgIGNsYXNzTmFtZXM9XCJmYWRlXCJcbiA+XG4gIHtjaGlsZHJlbn1cbiA8L0NTU1RyYW5zaXRpb24+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEZhZGVcblxuXG4iXX0=
