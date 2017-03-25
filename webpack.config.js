/* eslint-env node */


const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const srcDir = path.join(__dirname, "src");

let exportModule;


const common = {
    entry: {
        app: path.resolve(ROOT_PATH) + "/src/js/app.jsx"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: [path.resolve(__dirname, "src/js")],
            loader: "babel-loader", // "babel-loader" is also a legal name to reference
            query: {
                presets: ["react", "es2015"]
            }
        }]
    },
    devtool: "source-map"
};

if (TARGET === "buildDemo") {
    exportModule = merge(common, {
        entry: {
            app: path.resolve(ROOT_PATH) + "/demosrc/js/app.jsx"
        },
        output: {
            path: path.resolve(ROOT_PATH, "demo/js/"),
            filename: "slider-bundle.min.js"
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, "demosrc/js")],
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            }]
        },
        plugins: [
            // new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.min.js", function(module) {
            //     return module.resource && module.resource.indexOf(srcDir) === -1;
            // }),
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                filename: "vendor.min.js",
                minChunks: (module) => {
                    const userRequest = module.userRequest;
                    // module.userRequest returns name of file, including path
                    return userRequest && userRequest.match(/\.js$/) && userRequest.indexOf("node_modules") >= 0;
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}

if (TARGET === "start" || !TARGET) {
    exportModule = merge(common, {
        output: {
            filename: "src/main.js"
        },
        devServer: {
            noInfo: false,
            historyApiFallback: true,
            inline: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}

module.exports = exportModule;
