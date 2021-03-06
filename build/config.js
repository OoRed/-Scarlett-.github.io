var path = require('path');
module.exports = {
    entry: {
        index: {
            path: './src/index',
            title: 'scarlett'
        }
    },
    build: {
        env: {
            // NODE_ENV: '"development"'
            NODE_ENV: '"production"'
        },
        index: path.resolve(__dirname, `../`),
        // 编译输出的静态资源根路径
        assetsRoot: path.resolve(__dirname, `../`),
        devtool: 'cheap-module-source-map',
        // 编译输出的二级目录
        assetsSubDirectory: 'assets',
        // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: '/',
        // 是否开启 cssSourceMap
        productionSourceMap: false,
        extract: true,
        bundleAnalyzerReport: false,
        useDll: false
    },
    test: {
        env: {
            // NODE_ENV: '"development"'
            NODE_ENV: '"testing"'
        },
        index: path.resolve(__dirname, '../test-build/'),
        // 编译输出的静态资源根路径
        assetsRoot: path.resolve(__dirname, '../test-build'),
        // 编译输出的二级目录
        assetsSubDirectory: 'assets',
        // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: '/',
        // 是否开启 cssSourceMap
        productionSourceMap: false,
        extract: true,
        bundleAnalyzerReport: false,
        useDll: false
    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        devtool: 'cheap-module-eval-source-map',
        autoOpenBrowser: true,
        // port: 8089,
        // 编译输出的二级目录
        assetsSubDirectory: 'assets',
        // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: '/',
        cssSourceMap: true,
        extract: false
    }
};