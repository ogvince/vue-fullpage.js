const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./demos/demo1/src/Constants.js', './demos/demo1/src/index.js', './functions.js'],
  output: {
    path: path.resolve('bundle'),
    filename: 'bundle.js',
    publicPath: ''
},
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            js: 'babel-loader',
            css: 'css-loader'
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: ['css-loader'],
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new HtmlWebpackPlugin({ title: 'NEMAProd', template: './demos/template.html' })
  ],
};
