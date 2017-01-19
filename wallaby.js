var wallabyWebpack = require('wallaby-webpack');
var path = require('path'); 

module.exports = function (wallaby) {

 var webpackPostprocessor = wallabyWebpack({
    resolve: {
      modulesDirectories: [path.join(wallaby.projectCacheDir, 'src')],
    },
  });

  return {
    files: [
      { pattern: 'src/**/*.ts', load: false }
    ],

    tests: [
      { pattern: 'spec/**/*[sS]pec.ts', load: false }
    ],

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript() //compile ts using tsconfig.json
    },

    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
                                     file.content,
                                     {sourceMap: true, presets: ['es2015']}) //...then compile generated ES6 JS into ES5 using babel
    },
    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};