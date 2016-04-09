/* eslint-env browser */

import React from "react";

export class ReactNativeSlider extends React.Component {
    render() {
        return ( < input type = "range"
            value = { this.props.value }
            min = { this.props.min }
            max = { this.props.max }
            onInput = { this.props.handleChange }
            onChange = { this.handleOnChange }
            step = { this.props.step }
            className = "react-native-slider" / >
        );
    }
    handleOnChange() {
        // Nothing to do here.  Only present to prevent reactjs warning
        // about onChange not being present
    }
}

export default ReactNativeSlider;
