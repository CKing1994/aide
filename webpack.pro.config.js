/**
 *  webpack 开发阶段配置文件
 */

const webpack = require('webpack');
const path = require('path'); // node 文件路径处理模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // webpack 自动生成HTML插件
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 抽取css插件
const CleanPlugin = require('clean-webpack-plugin'); // 删除dist文件夹插件
module.exports = {
    // 入口文件
    entry: path.resolve(__dirname, 'src/main.js'),
    // 输出文件
    output: {
        // 输出至哪个文件夹
        path: path.resolve(__dirname, 'dist'),
        // 输出的文件名
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader',
                    // 此处配置可以单独放到.babelrc文件中
                    // options: {
                    //     presets: ['es2015', 'react']
                    // }
                }]
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                // 分离css文件
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=25000'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 需要复制的HTML页面模板(在src目录下创建template.html)
            template: 'template.html',
            // 代码压缩
            minify: {
                // 删除注释
                removeComments: true,
                // 删除空格
                collapseWhitespace: true,
                // 删除空格缩进
                removeAttributeQuotes: true
            }
        }),
        // 抽取css文件
        new ExtractTextPlugin('app.css'),
        // 删除dist文件夹
        new CleanPlugin(['dist']),
        // 删除警告
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        // 代码压缩插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}