import {default as path, resolve} from 'path';
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(__dirname)
module.exports = {
  entry: './src/index.tsx',
  
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        // options: {
        //     // disable type checker - we will use it in fork plugin
        //     transpileOnly: true
        //   }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
    })  
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