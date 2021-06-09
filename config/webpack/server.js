const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const webpackConfigDev = require('./webpack.config');
const environment = require('./environment');

const app = express();

const webpackCompiler = webpack(webpackConfigDev);
const localHostPort = 3000;
const heartbeatTiming = 2000;
const { __PROD__ } = environment;

const serverMode = () => {
    if (__PROD__) {
        app.use(express.static(path.resolve(__dirname, '../../build')));
    } else {
        app.use(
            webpackDevMiddleware(webpackCompiler, {
                publicPath: webpackConfigDev.output.publicPath,
            })
        );

        app.use(
            webpackHotMiddleware(webpackCompiler, {
                log: false,
                path: '/__webpack_hmr',
                heartbeat: heartbeatTiming,
            })
        );
    }
};

serverMode();
app.listen(localHostPort, function () {
    console.log(`Example app listening on port ${localHostPort}!\n`);
});
