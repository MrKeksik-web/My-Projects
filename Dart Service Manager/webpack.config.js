'use strict';

let path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js', 
  },
  module: {  
      rules: [ 
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: [
              /node_modules/
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash].[ext]',
            },
        },
        {
            test: /\.css$/i,
            exclude: /(node_modules|bower_components)/,
            use: [        
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                  plugins: [
                      Autoprefixer({
                        overrideBrowserslist:['ie >= 8', 'last 4 version']
                      })
                  ],
                  sourceMap: true
              }
            },
          ]
        },
      ]
  },
  plugins: [  
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
        filename: path.resolve(__dirname, 'dist/index.html')
      }),
      new MiniCssExtractPlugin({
        filename: 'css/style.[hash].css'
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          { from: 'src/public/images', to: 'images' },
        ],
      }),
  ],
};