/*
 * @Description: webpack config
 * @Author: dmlzj
 * @Github: https://github.com/dmlzj
 * @Email: 284832506@qq.com
 * @Date: 2020-01-10 15:32:32
 * @LastEditors: dmlzj
 * @LastEditTime: 2020-04-23 14:45:14
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 */
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'vlf.js',
    path: path.resolve(__dirname, 'dist')
  }
};