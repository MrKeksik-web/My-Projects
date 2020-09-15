'use strict';

let path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postcssImport = require("postcss-import");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  let config = {
    splitChunks: {
      chunks: 'all',
    }
  }

  if(isProd){
    config.minimizer = [new OptimizeCssAssetsPlugin(), new TerserPlugin()];
  }

  return config;
}

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'js/bundle.[contenthash].js',
    path: __dirname + '/dist',
  },

  devtool: "source-map",

  optimization: optimization(),

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
            }]]
          }
        }
      },
      {
        test: /\.png|jpg|svg|gif$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          },
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: isDev,
            reloadAll: true
          },
        },
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                postcssImport,
                Autoprefixer({
                  overrideBrowserslist:['ie >= 8', 'last 4 version']
                })
            ],
            },
            sourceMap: true
          }
        },
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/public/index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/images'),
          to: path.resolve(__dirname, 'dist/images')
        },
        {
          from: path.resolve(__dirname, 'src/public/video'),
          to: path.resolve(__dirname, 'dist/video')
        },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.[hash].css'
    }),
  ]
};