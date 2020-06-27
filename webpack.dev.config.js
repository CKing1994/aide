/**
     *  webpack 开发阶段配置文件
     */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
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
                }],
                exclude:/node_modules/

            }, 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'url-loader?limit=25000'
            }
        ]
    },
    plugins:[
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
        })
    ]
}