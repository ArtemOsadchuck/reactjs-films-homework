import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const CopyPlugin = require('copy-webpack-plugin');

const environment = process.env.NODE_ENV
const isDev = environment === 'development'
if (isDev) {
    console.log(environment, '--- mode enable')
}

const config = ({ mode }) => ({
    mode: mode,
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "../../build"),
        filename: "js/[name].[contenthash].js",
        publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { modules: true },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|jpeg)$/i,
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
        extensions: [".tsx", ".ts", ".js"],
    },
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.[contenthash].html"
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
    ],
});

export default config;
