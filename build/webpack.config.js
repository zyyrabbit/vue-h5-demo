const path = require("path");
const config = require("../config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const vueLoaderConfig = require('./vue-loader.conf');
const HappyPack = require('happypack');
// 构造出共享进程池，进程池中包含5个子进程
const happyThreadPool = HappyPack.ThreadPool({ size: 10 });
//解决path.join解决路径替换问题
const pathConvert = (_path,_name) => {
    return path.join(_path,_name).replace('\\','/');
};
 // 注意在package.json中NODE_ENV=production&&没有空格,否则为false

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
    // 配置入口及loader相对路径的根路径
    context: config.APP_PATH, 
    entry: {
        app: config.SRC_PATH,
        vendor: ['vue']
    },
    output: {
        publicPath: config.PUBLIC_PATH,
        // 用于没有entry设置模块名--------在生产环境设置hash命名，主要为了发布新版本，消除浏览器缓存影响
        chunkFilename: isProduction ? pathConvert(config.SCRIPT_PATH, '[name].[hash].bunld.js'): 
                                      pathConvert(config.SCRIPT_PATH, '[name].bunld.js'),
        path: config.OUTPUT_PATH,
        filename: isProduction ? pathConvert(config.SCRIPT_PATH, '[name].[hash].bunld.js') : 
                                 pathConvert(config.SCRIPT_PATH, '[name].bunld.js')
    },
    //解析文件配置
    resolve: {
        // 针对 Npm 中的第三方模块优先采用 jsnext:main 中指向的 ES6 模块化语法的文件
        mainFields: ['jsnext:main', 'browser', 'main'],
        extensions: ['.vue', '.js'],
        //设置路径别名
        alias: { 
                'vue$': 'vue/dist/vue.js', // 指定使用开发版本的vue
                //'@': pathConvert(config.APP_PATH,'./src'),              
                'components': pathConvert(config.APP_PATH, './src/components'),
                'api': pathConvert(config.APP_PATH, './src/api'),
                'utils': pathConvert(config.APP_PATH,'./src/utils'),
                'store': pathConvert(config.APP_PATH, './src/store'),
                'router': pathConvert(config.APP_PATH, './src/router'),
                'config': pathConvert(config.APP_PATH, './config'),
                'pages': pathConvert(config.APP_PATH, './src/pages'),
                'directives': pathConvert(config.APP_PATH, './src/directives'),
                'assets': pathConvert(config.APP_PATH, './src/assets')
            },
        // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src')],
                options: {
                formatter: require('eslint-friendly-formatter')
                }
            },            
            {
                test: /\.html$/,
                use: ['html-loader']

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // 使用happypack
                use: ['happypack/loader?id=babel']
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: isProduction,
                            sourceMap: false
                        }
                    }]
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use:[{
                      loader: 'url-loader',
                      options:{
                        limit: 8192,
                        name: isProduction ? 'assets/font/[name].[hash].[ext]' : 
                                            'assets/font/[name].[ext]' // 超出文件限制的文件路径
                      }
                }]
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: isProduction ? 'assets/images/[name].[hash].[ext]' : 
                                             'assets/images/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: ['happypack/loader?id=vue']
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'babel',
            // 如何处理 .js 文件，用法和 Loader 配置中一样
            loaders: ['babel-loader'],
            // 使用共享进程池中的子进程去处理任务
            threadPool: happyThreadPool
        }),
        new HappyPack({
            id: 'vue',
            // 如何处理 .js 文件，用法和 Loader 配置中一样
            loaders: [{
                loader: 'vue-loader',
                options: vueLoaderConfig
            }],
            // 使用共享进程池中的子进程去处理任务
            threadPool: happyThreadPool
        }),
        new HtmlWebpackPlugin({
            filename: pathConvert(config.OUTPUT_PATH, 'index.html'),
            template: config.HTML_PATH,
            inject: true,
            hash: true
            // chunks: ['app']
        }),
        new ExtractTextPlugin(pathConvert(config.STYLE_PATH, '[name].css'), {
            allChunks: true
        })
    ]
}
