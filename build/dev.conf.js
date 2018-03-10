var config = require('./config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var utils = require('./utils')
var baseWebpackConfig = require('./base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var path = require('path')
const devRules = utils.styleLoaders({
    sourceMap: config.dev.cssSourceMap,
    extract: config.dev.extract
});

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: devRules
    },
    devtool: config.dev.devtool,
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({ 'process.env': config.dev.env }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true,
            chunks: ['vendors', 'main']
        }),
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css'),
            allChunks: false
        })
    ],
    devServer: {
        hot: true,
        open: config.dev.autoOpenBrowser,
        overlay: { warnings: false, errors: true }, // 是否将errors显示在页面
        // 如果使用history模式.则需要配置重定向.
        historyApiFallback: true,
        // 跨域代理
        proxy: {
            '/mock': {
                target: '',
                secure: false,
                pathRewrite: { "^/mock": "" }
            }
        }
    }
})