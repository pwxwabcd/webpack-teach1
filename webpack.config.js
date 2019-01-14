const path = require('path');

module.exports = {
  entry: './src/index.js', //原文件
  output: {
    filename: 'main.js', //输出文件
    path: path.resolve(__dirname, 'dist') //输出路径
  }
};