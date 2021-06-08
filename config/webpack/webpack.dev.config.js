const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const configDev = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../../build'),
        filename: '[hash].build.js',
        hotUpdateChunkFilename: '.hot/hot-update.js',
        hotUpdateMainFilename: '.hot/hot-update.json',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
    ],
};

module.exports = configDev;
