const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map', //use source maps for debugging
  
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000',
    'index.tsx'
  ],
  output: {
    filename: 'app.js', //compile into app.js...
    path: path.resolve('dist'), //...in the dist folder
    publicPath: '/dist' //expose it via /dist/app.js
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