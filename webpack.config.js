const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// require('dotenv').config({ path: './.env' });

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // look at Kara @babel/env
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react']
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    static: {
      publicPath: '/build', // our build module didnt have this
      directory: path.join(__dirname, '/build') // we used client
    },
    compress: true, // not in kara
    port: 8080, // not in kara
    proxy: {
      '/': {
        target: 'http://localhost:3000'
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      // we are referencing our index.html as a template to get access to the root id for our react app to hang from
      title: 'test',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/mystyles.css'
    })
  ]
};
