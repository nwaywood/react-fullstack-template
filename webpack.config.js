const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'app/src');
const PUBLIC_DIR = path.resolve(__dirname, 'app/public');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${PUBLIC_DIR}/index.html`,
    filename: 'index.html',
});

// See https://medium.com/@kimberleycook/intro-to-webpack-1d035a47028d#.8zivonmtp for
// a step-by-step introduction to reading a webpack config
const config = {
    entry: `${APP_DIR}/index.js`,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: APP_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                },
            },
        ],
    },
    plugins: [HTMLWebpackPluginConfig],
};

module.exports = config;
