(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.reactHtml5Slider = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ReactNativeSlider = function ReactNativeSlider(_ref) {
    var value = _ref.value,
        min = _ref.min,
        max = _ref.max,
        handleChange = _ref.handleChange,
        handleOnChange = _ref.handleOnChange,
        step = _ref.step,
        name = _ref.name;
    return _react2.default.createElement("input", { type: "range",
      value: value,
      min: min,
      max: max,
      onInput: handleChange,
      onChange: handleOnChange,
      step: step,
      name: name,
      className: "react-native-slider" });
  }; /* eslint-env browser */

  exports.default = ReactNativeSlider;


  ReactNativeSlider.propTypes = {
    value: _react2.default.PropTypes.number.isRequired,
    min: _react2.default.PropTypes.number.isRequired,
    max: _react2.default.PropTypes.number.isRequired,
    handleChange: _react2.default.PropTypes.func,
    handleOnChange: _react2.default.PropTypes.func,
    step: _react2.default.PropTypes.number,
    name: _react2.default.PropTypes.string
  };
});
