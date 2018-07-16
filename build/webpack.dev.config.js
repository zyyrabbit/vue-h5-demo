const path = require("path")
const webpackConfig = require("./webpack.config")
const config = require("../config")
const webpackMerge = require("webpack-merge")
const webpack = require("webpack")

module.exports = webpackMerge(webpackConfig, {
	// 在开发环境下把 devtool 设置成 heap-module-eval-source-map，因为生成这种 Source Map 的速度最快，能加速构建。由于在开发环境下不会做代码压缩，Source Map 中即使没有列信息也不会影响断点调试
    devtool: 'inline-source-map',
    // vue-loader会自动开启热重载--如果启动webpack-dev-server --hot，这里自定义实现
    plugins:[
    	new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
		publicPath: config.PUBLIC_PATH,
		stats: {
			colors: true //显示不同的颜色区分打包的文件
		},
		// 热重载默认关闭，现在开启
		hot: true,
		// 项目根目录下的 output 目录设置成 DevServer 服务器的文件根目录
		contentBase: config.OUTPUT_PATH,
		port: 9090,
		index: 'index.html',
		proxy: {
			'/mobile-edurental-mgr/*': {
				target: 'http://39.104.67.0:8443/',
				changeOrigin: true,
				secure: false
			}
		}
	}
})
