// Inspiration: https://webpack.js.org/guides/hmr-react/
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },

  devServer: {
    hot: true,
    publicPath: '/dist/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?(.flow)?$/, // .js .jsx .js.flow
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /.png|jpg|gif$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],

  resolve: {
    modules: [
      'node_modules', // duh !
      'src',
    ],
  },

  performance: {
    hints: false,
  },
};
