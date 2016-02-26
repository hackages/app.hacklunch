'use strict';

let path     = require('path');
let webpack  = require('webpack');

module.exports = {
  entry: './app/index',
  output: {
    filename: 'hacklunch.js',
    path: path.join(__dirname, 'dist'),
    vendor: ['angular']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      }
    ]
  }
};
