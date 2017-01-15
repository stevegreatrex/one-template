const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map', //use source maps for debugging
  entry: [
    'babel-polyfill', //polyfill support for ES6
    'index.tsx' //define the app entry point
  ],
  output: {
    filename: 'app.js', //compile into app.js...
    path: path.resolve('dist') //...in the dist folder
  },

  //when importing a module, look for files with these extensions in these folders
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] } //compile .ts and .tsx files using babel
    ]
  }
}