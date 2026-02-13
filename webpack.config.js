// NOTE: To use this example standalone (e.g. outside of repo)
// delete the local development overrides at the bottom of this file

// Load .env file into process.env
require('dotenv').config();

// avoid destructuring for older Node version support
const path = require('path');
const resolve = require('path').resolve;
const webpack = require('webpack');
HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'development',

  devServer: {
    static: '.'
  },

  entry: {
    app: resolve('./src/app')
  },

  output: {
    library: 'App',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: [resolve('.')],
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react']
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [{
          loader: 'style-loader'
        },
      {
        loader: 'css-loader'
      }],
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin({ACCESS_TOKEN: '', BASE_PATH: '/tvm-study'}),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'data', to: 'data' }
      ]
    })
  ]
};

// Enables bundling against src in this repo rather than the installed version
module.exports = env =>
  env && env.local ? require('../webpack.config.local')(config)(env) : config;
