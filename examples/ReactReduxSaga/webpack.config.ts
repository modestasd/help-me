import {default as path, resolve} from 'path';
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config({path: __dirname + '/env/.env'});

module.exports = {
  entry: './src/index.tsx',
  
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed)
  }),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
        src: resolve(__dirname, 'src')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    host: 'localhost',
    port: 8090
  }
};