const paths = require('./paths');
const webpack = require('webpack');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',

    // Disable minification for easier debugging
    optimization: {
        minimize: false,
    },

    output: {
        path: paths.appBuildProd,
    },

    plugins: [
        // Local execution of the app server
        new webpack.DefinePlugin({
            // Quotes around strings for compile-time text substitution
            __API__: "'" + paths.appServerProd + "'",
        }),
    ],
});
