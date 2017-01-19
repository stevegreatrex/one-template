var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'allTests.js' //use allTests.js to discover all other test files
  ],
  output: {
    filename: 'tests.js',
    path: path.resolve('tmp') //output to a temp folder
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    modulesDirectories: ['src', 'spec', 'node_modules'] //include `spec` folder in module directories
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] }
    ]
  },
  plugins: []
};