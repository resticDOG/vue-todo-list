/*
 * @Author: linkzz
 * @Description: webpack配置文件
 * @Date: 2019-07-13 12:44:39
 */
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

const config = {
  target: 'web',
  entry : path.join(__dirname, './src/index.js'),
  output : {
    filename : 'bundle.js',
    path : path.join(__dirname, 'dist')
  },
  module: {
    rules : [
      {
        test : /\.vue$/,
        loader : 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test : /\.css$/,
        use : [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader : 'url-loader',
            options : {
              limit : 1024,
              name : '[name]-test.[ext]'
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin()
  ]
}

isDev && (
  config.devtool = '#cheap-module-eval-source-map',
  config.devServer = {
    port : '9537',
    host : '0.0.0.0',
    overlay : {
      errors : true
    },
    open : true,
    hot : true,
},
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
)

module.exports = config;