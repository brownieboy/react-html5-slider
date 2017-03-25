/* eslint-env browser */

import React from "react";

const ReactNativeSlider = ({
  value,
  min,
  max,
  handleChange,
  handleOnChange,
  step,
  name
}) => <input type = "range"
            value = { value }
            min = { min }
            max = { max }
            onInput = { handleChange }
            onChange = { handleOnChange }
            step = { step }
            name = { name }
            className = "react-native-slider" / >;

export default ReactNativeSlider;

ReactNativeSlider.propTypes = {
  value: React.PropTypes.number.isRequired,
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
  handleChange: React.PropTypes.func,
  handleOnChange: React.PropTypes.func,
  step: React.PropTypes.number,
  name: React.PropTypes.string
};

