const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfigDev = require('./webpack.dev.config.ts');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const webpackCompiler = webpack(webpackConfigDev);
const environment = process.env.NODE_ENV;
const localHostPort = 3000;
const heartbeatTiming = 2000;

if (environment === 'production') {
    console.log(`${environment} server test`)
};

app.use(
  webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfigDev.output.publicPath,
  })
);

app.use(webpackHotMiddleware(webpackCompiler, {
  log: false,
  path: '/__webpack_hmr',
  heartbeat: heartbeatTiming
}));

app.listen(localHostPort, function () {
  console.log('Example app listening on port 3000!\n');
});
