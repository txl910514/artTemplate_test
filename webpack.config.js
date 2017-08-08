/**
 * Created by txl-pc on 2017/8/6.
 */
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
let webpack = require('webpack')
let dist =path.resolve(__dirname,"dist")
module.exports = {
  entry: {
    art: './src/main.js',
    page: './src/layout.js',
    art1: './src/main1.js',
    art2: './src/main2.js'
  },
  output:{
    path: dist,
    filename:'[name].js',
    publicPath: "/",
  },
  resolve: {
    extensions: ['.js','.json'],
    alias: {
      'jquery': 'jquery/src/jquery'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use:[{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.html/,
        exclude: /(node_modules|bower_components)/,
        use:[{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.art/,
        exclude: /(node_modules|bower_components)/,
        use:[{
          loader: 'art-template-loader'
        }]
      }
    ]
  },
  devServer: {
    contentBase: dist,
    publicPath: "/",
    compress: true,
    port: 5000,
    disableHostCheck: true,
    proxy: {
      '/mock': {
        target: 'http://127.0.0.1:3090',
        changeOrigin: true,
        pathRewrite: {
          '^/mock': '/mock'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:"art",
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.art'),
      chunks: ['art', 'vendor'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      title:"page",
      filename: 'page.html',
      template: path.resolve(__dirname, './src/page.art'),
      chunks: ['page', 'vendor'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      title:"art1",
      filename: 'index1.html',
      template: path.resolve(__dirname, './src/index1.art'),
      chunks: ['art1', 'vendor'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      title:"art2",
      filename: 'index2.html',
      template: path.resolve(__dirname, './src/index2.art'),
      chunks: ['art2', 'vendor'],
      inject: true
    }),
    new OpenBrowserPlugin({url: 'http://localhost:5000/'}),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    })
  ]
}