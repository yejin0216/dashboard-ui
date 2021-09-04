const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/public/index.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
    filename: 'index.bundle.js',
    // filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // plugins: ['@babel/plugin-proposal-object-rest-spread']
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/public'),
    },
    compress: true,
    hot: 'only',
    port: 9000,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
