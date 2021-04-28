const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigDev = {
	mode: 'development', // 通过 mode 声明开发环境
	output: {
		path: path.resolve(__dirname, '../dist'),
		// 打包多出口文件
		filename: 'js/[name].bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, "../src/pages/index"),
		publicPath:'/',
		host: "10.252.24.4",
		port: "8090",
		overlay: true, // 浏览器页面上显示错误
		 open: false, // 开启浏览器
		// stats: "errors-only", //stats: "errors-only"表示只打印错误：
		//服务器代理配置项
        proxy: {
            '/testing/*': {
                target: 'https://www.baidu.com',
                secure: true,
                changeOrigin: true
            }
        }
    },
	//DefinePlugin 最为常用的用途就是用来处理我们开发环境和生产环境的不同。比如一些 debug 的功能在生产环境中需要关闭、开发环境中和生产环境中 api 地址的不同。
	// plugins:[
	// 	new webpack.DefinePlugin({
	// 		'process.env.BASE_URL': '\"' + process.env.BASE_URL + '\"'
	// 	}),
	// ]

}
module.exports = merge(webpackConfigBase, webpackConfigDev);