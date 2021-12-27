const express = require('express');
const rimraf = require('rimraf');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const path = require('path');
const paths = require('../config/paths');
const webpackConfig = require(paths.webpackConfigDev);

console.log(`Starting debug build with hot reloading.`);

const app = express();
const compiler = webpack(webpackConfig);

rimraf.sync(paths.appBuildDev);

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        writeToDisk: true,
    })
);

app.use(webpackHotMiddleware(compiler));

// This allows redirecting to home to handle routing
app.get('/*', function (req, res) {
    res.sendFile(path.join(paths.appBuildDev, 'index.html'));
});

port = 3000;
host = 'localhost'
server = app.listen(port, host);
server.on('listening', function () {
    console.log(`Listening on http://${server.address().address}:${server.address().port}/.`);
});
