'use strict';

let path = require('path');

module.exports = {
  entry: './app/index',
  output: {
    filename: 'hacklunch.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
