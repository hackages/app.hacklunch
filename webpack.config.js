'use strict';

let path     = require('path');
let webpack  = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './app/index',
  output: {
    filename: 'hacklunch.js',
    path: path.join(__dirname, 'dist'),
    // vendor: ['react']
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: 'html',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};



// new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
