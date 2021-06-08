const { merge } = require('webpack-merge');
const configCommon = require('./webpack.common.config');
const configDev = require('./webpack.dev.config');
const configProd = require('./webpack.prod.config');
const configDevServer = require('./webpack.devServer.config');
const environment = require('./environment');

const { __DEV__, __PROD__, __DEVSERV__ } = environment;

const config = () => {
    if (__DEVSERV__) return merge([configCommon, configDev, configDevServer]);
    if (__DEV__) return merge([configCommon, configDev]);
    if (__PROD__) return merge([configCommon, configProd]);
};

module.exports = config();
