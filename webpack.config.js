/*
 * @Author: linkzz
 * @Description: webpack配置文件
 * @Date: 2019-07-13 12:44:39
 */
const path = require('path');

module.exports = {
  entry : path.join(__dirname, './src/index.js'),
  output : {
    filename : 'bundle.js',
    path : path.join(__dirname, 'dist')
  },
  module: {
    rules : [
      {
        test : /.vue$/,
        loader : 'vue-loader'
      }
    ]
  }
}