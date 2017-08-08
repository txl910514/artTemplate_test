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
    page: './src/layout.js'
  },
  output:{
    path: dist,
    filename:'[name].js',
    publicPath: "/",
  },
  resolve: {
    extensions: ['.js','.json'],
    alias: {
      'jquery': 'jquery/src/jquery',
      'art-template': 'art-template/lib/template-web.js'
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
    new OpenBrowserPlugin({url: 'http://localhost:5000/'}),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    })
  ]
}