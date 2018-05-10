'use strict'
//项目地址及打包路径配置文件
const path = require("path");
const BASE_PATH = path.join(path.resolve(__dirname, '../'));

module.exports = {
	//webpaack打开地址
    APP_PATH: BASE_PATH,
    HTML_PATH: path.join(BASE_PATH, 'index.html'),
    STYLE_PATH: './styles',
    SCRIPT_PATH: './scripts',
    IMAGE_PATH: './images',
    OUTPUT_PATH: path.join(BASE_PATH, 'output'), // 必须绝对路径
    SRC_PATH: './src/main.js',
    PUBLIC_PATH: '/business/', // 服务器存放根目录
    PORT: 9000,
    //请求资源地址
    REQUEST_ADDR:'http://localhost:8080/business',

    build: {
        env: require('./prod.env'),
        productionSourceMap: false
    },
    dev: {
        env: require('./dev.env'),
        cssSourceMap: false
    }
}