# React HTML5 Slider

### Overview
A ReactJS wrapper for the HTML5 input type="range" slider component.


### Background
Note: This project is a split off from my [react-bootstrap-native-slider](https://www.npmjs.com/package/react-bootstrap-native-slider) plugin, now discontinued.

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
                name="myslider"
                step={this.props.step} />
        );
    }
```

It's about as simple a rendering as you could want in React.  You'd pass some props into your component, and render them as the corresponding attributes on the input field.

Note: react and react-dom are listed as peer dependencies for the plugin, which means that they will _not_ be installed automatically when you add the plugin to your porject.  It is assumed that you will have installed them as part of your application, and that you will react in scope anywhere that you call the plugin.


### How to use
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
    name="myslider"
    disabled="disabled" />
    }
```

The **value**, **step**, **max** and **min** parameters should be self-explanatory.  handleChange is the callback method that will be called when the slider actually changes.

If the optional parameter **disabled** is included, and is set to "disabled", then the slider will display in a disabled state.  If the parameter is not included, or is set to anything else except "disabled", then the slider control will be enabled.

## Development
To develop, issue this command:

    npm run start

then point your browser to [http://localhost:8080/src/index.html](http://localhost:8080/src/index.html).  You need to edit the code in the /src folder.  It will update in the browser automatically, courtesy via webpack-dev-server.

To build the distribution version, issue:

    npm run build

The build JavaScript file will go on the /dist folder as react-html5-slider.js.  This is the main file for the project, which is used whenever this the react-html5-slider package is loaded from npm.


## Demo
There is a /demo folder present, but it only contains index.html and the CSS files by default.  The JavaScript files need to be built before you can run this demo.  If there is no /demo/js folder present, then you need to run:

        npm run buildDemo

Webpack will build the JavaScript files for the demo in the /demo/js/ folder.  The demo code will go in the slider-bundle.min.js file.  Any 3rd-party code (React and the react-html5-slider plugin itself) goes into the vendor.min.js file.  Source maps are generated for both.

        npm run localServer

This will launch http-server running on port 8082, so you can then open the built demo from http://localhost:8082/demo/index.html.


## Tests
There are no unit tests.

End to end (E2E) tests are handled by Protractor with Selenium Web Driver.


### Installing Tests Dependencies
Before running the E2E tests, you'll need to install the web driver first by running:

        npm run updateSelenium

You only have to do this once though.


### Running Tests Against Dev Version
The same set of tests can be run against either the Dev version or the built version of the Demo.  To run run tests against the development version of the Demo, you need to run:

        npm run testDev

This assumes that you already have webpack-dev-server running on port 8080, via an `npm run start` command.  So putting that all together, the full commands to run the Dev tests would be:

        npm run updateSelenium
        npm run start
        npm run testDev

Note: the latter command will need to be run in a separate terminal window/tab, because the first terminal will be tied up with running webpack-dev-server.


### Running Tests Against Built Version
To run tests against the built version, you obviously need to build that version first!  You then need a server running on port 8082, before finally running the tests in a new terminal window/tab.  The commands to do all of this would be:

         npm run updateSelenium
         npm run buildDemo
         npm run localServer
The localServer command will tie up your current terminal window, so start up a new one and enter:

         npm run testBuild


### Test Results & Reports
Test results will be displayed in whichever terminal to your the `npm run testBuild` or `npm run testDev` commands.

The tests will also generate HTML reports in the /reports folder, courtesy of the [protractor-jasmine2-screenshot-reporter](https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter) package.  Open the /reports/index.html file in a browser to see them.  Note how each test result in this report is a URL.  If you click on the URL, it will take you to a screenshot of how the browser looked when that particular test ran, which is pretty neat, IMHO!



### Editing Tests
The tests themselves are in the file tests/e2e/slidertest1.js.  The tests check:

1. The page loads with the correct default values set for both the vertical and horizontal versions of the Demo.
1. Dragging the horizontal slider to the right increases its value correctly
1. Clicking on the Change Axes button for both demos changes each one's respective default value correctly.

There's a Protractor Tutorial at http://www.protractortest.org/#/tutorial, and the the Protractor API is at http://www.protractortest.org/#/api.



## Update History
Version 0.2.1 26 Mar 2017
* Added Selenium E2E tes:ts.  (No actual code changes to the component.)

Version 0.2.0: 25 March 2017.
* Added optional `name` parameter. (Thanks to gmannings for the PR.)
* Switched ReactNativeSlider to be a functional component, since it has no state of its own.
* Updated dependencies to latest versions and moved react & react-dom to be peer dependencies.
* Dumped a lot of unnecessary code in the npm bundle by adding an .npmignore file.


