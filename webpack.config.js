const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'app/src')
const PUBLIC_DIR = path.resolve(__dirname, 'app/public')

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${PUBLIC_DIR}/index.html`,
    filename: 'index.html',
})

// Enable multi-pass compilation for enhanced performance
// in larger projects. Good default
const HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin({
    multiStep: true,
})


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
                // babel loader for ES6 tranpilation and
                // react-hot for HMR of react components
                // config for babel-loader is in .babelrc
                loaders: ['react-hot-loader/webpack', 'babel'],
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000',
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader',
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml',
            },
        ],
    },
    plugins: [
        HTMLWebpackPluginConfig,
        HotModuleReplacementPluginConfig,
    ],
    // setting for devServer (npm run start)
    devServer: {
        // contentBase needs to point to same dir as `entry`
        contentBase: APP_DIR,

        // enable HMR
        hot: true,
        // automatic browser refresh
        inline: true,
        // automatically open in default browser
        open: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups
        historyApiFallback: true,

        // setup proxy for routing api calls to backend server
        proxy: {
            '/api/*': 'http://localhost:3000',
        },
        // port to run the dev server on
        port: 8080,
    },
}

module.exports = config
