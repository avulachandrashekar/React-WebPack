var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "app");

module.exports = {
    devtool: 'source-map',
    entry : SRC_DIR +"/js/index.js",
    output : {
        path : DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath : "/app/"
    },
    module : {
            loaders :[
                {
                    test : /\.js$/,
                    loader : "babel-loader",
                    include : SRC_DIR,
                    exclude :/node_modules/,
                    query : {
                        presets : ["es2015", "react"]
                    }
            } 
            ]
        },
    plugins : [
        new HtmlWebpackPlugin
        (
            {
            template : "app/index.html"
        }
        )
    ]

}