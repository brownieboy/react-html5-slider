# React HTML5 Slider

###Overview
A ReactJS wrapper for the HTML5 input type="range" slider component.


###Background
Note: This project is a split off from my [react-bootstrap-native-slider](https://www.npmjs.com/package/react-bootstrap-native-slider) plugin.  The plan is for the react-html5-slider to become a dependency of react-bootstra-native-slider, rather than have all the code bundled into the latter, as at present.

I like the HTML5 native range control, especially how easy it is manipulate via [ReactJS](http://facebook.github.io/react/), my current favourite JavaScript library.

Here's how the native JavaScript control is rendered in my plug-in:

```JavaScript
    render: function () {
        return (
            <input
                type="range"
                value={this.props.value}
                min={this.props.min}
                max={this.props.max}
                onInput={this.props.handleChange}
                step={this.props.step} />
        );
    }
```

It's about as simple a rendering as you could want in React.  You'd pass some props into your component, and render them as the corresponding attributes on the input field.


###How to use
Install from npm with:

    npm install --save react-html5-slider

Require or import like so for ES6:

    import ReactNativeSlider from "react-html5-slider";

or like this for CommonJS:

    var ReactNativeSlider = require("react-html5-slider");


The control is implemented in UMD format, so should also work for AMD/RequireJS, but I've not tested that.  You can also add it as a script tag.


Here's an example of how you might call it in your ReactJS's render method:

```JavaScript
<ReactNativeSlider
    value={this.state.currentValue}
    handleChange={this.changeValue}
    step={this.state.step}
    max={this.state.max}
    min={this.state.min}
    disabled="disabled" />
    }
```

The **value**, **step**, **max** and **min** parameters should be self-explanatory.  handleChange is the callback method that will be called when the slider actually changes.

If the optional parameter **disabled** is included, and is set to "disabled", then the slider will display in a disabled state.  If the parameter is not included, or is set to anything else except "disabled", then the slider control will be enabled.

##Development
To develop, issue this command:

    npm run start

then point your browser to [http://localhost:8080/src/index.html](http://localhost:8080/src/index.html).  You need to edit the code in the /src folder.  It will update in the browser automatically, courtesy via webpack-dev-server.

To build the distribution version, issue:

    npm run build

The build JavaScript file will go on the /dist folder as react-html5-slider.js.  This is the main file for the project, which is used whenever this the react-html5-slider package is loaded from npm.

To build the demo, issue:

   npm run buildDemo

Wepback will build the JavaScript files for the demo in the /demo/js/ folder.  The demo code will go in the slider-bundle.min.js file.  Any 3rd-party code (React and the react-html5-slide plugin itself) goes into the vendor.min.js file.  Source maps are generated for both.












