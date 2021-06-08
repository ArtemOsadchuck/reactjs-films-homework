const path = require('path');
const webpack = require('webpack');

const configDevServer = {
    devServer: {
        contentBase: path.join(__dirname, '../../build'),
        historyApiFallback: true,
        hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = configDevServer;
