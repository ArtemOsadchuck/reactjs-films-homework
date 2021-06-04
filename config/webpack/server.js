const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfigDev = require('./webpack.dev.config.ts');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const webpackCompiler = webpack(webpackConfigDev);
const environment = process.env.NODE_ENV;
console.log(environment);
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
  heartbeat: 2000
}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
