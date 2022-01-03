const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: [
    'react-hot-loader/patch',
    './client/src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    },
 
    port: 8080,
    // proxy: {
    //   '/': {
    //     target: 'http://localhost:3000',
    //     secure: false
    //   }
    // },
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: './client/src/index.html',
    }),
  ],

  // devServer: {
  //   proxy: {
  //     '/': 'http://localhost:3000',
  //   },
  //   static: {
  //     directory: path.join(__dirname),
  //   },
  //   compress: true,
  //   port: 8080,
  // },
};

module.exports = config;