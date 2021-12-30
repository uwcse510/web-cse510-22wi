const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: {
        app: [paths.appIndex],
    },

    // Extensions Webpack will resolve when files import other files
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({ configFile: paths.tsconfig })],
    },

    output: {
        filename: '[name].[fullhash].js',
    },

    module: {
        rules: [
            // Primary Typescript loader, loading .tsx or .ts
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env', '@babel/react'],
                        },
                    },
                    'ts-loader',
                ],
                exclude: "/node_modules/",
            },
            // MDX loader, loading .mdx
            {
                test: /\.mdx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env', '@babel/react']
                        }
                    },
                    '@mdx-js/loader'
                ],
                exclude: "/node_modules/",
            },
            // Image resources
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]'
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            // Configuration:  https://github.com/jantimon/html-webpack-plugin
            template: paths.appIndexTemplate,
            // base: Not apparently needed with publicPath defined in output
            // publicPath: Not apparently needed with publicPath defined in output
        }),
    ],
};
