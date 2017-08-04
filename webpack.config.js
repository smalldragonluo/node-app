/**
 * @author 龙喜<xiaolong.lxl@alibaba-inc.com>
 * @description webpack.config
 */

'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src/web'),
  entry: {
    index: './index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      // Extract css files
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // the commons chunk name
      name: 'commons',
      // the filename of the commons chunk
      filename: 'commons.js',
       minChunks: 2
    }),
    new ExtractTextPlugin('[name].css')
  ],
  devtool: '#source-map'
};
