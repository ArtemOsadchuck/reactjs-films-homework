const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const environment = process.env.NODE_ENV;
const isDev = environment === 'development';
if (isDev) {
    console.log(environment, 'dev mode enable');
}

module.exports = {
    mode: environment,
    entry: {
        devServer: isDev
            ? ['webpack-hot-middleware/client', './src/index.tsx']
            : './src/index.tsx',
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: '[name].build.js',
        hotUpdateChunkFilename: '.hot/hot-update.js',
        hotUpdateMainFilename: '.hot/hot-update.json',
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { modules: true },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/pic',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/fonts',
                        },
                    },
                ],
            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/sounds/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'life-server',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
    ],

    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../../build'),
        // historyApiFallback: true,
        hot: true,
    },
};
