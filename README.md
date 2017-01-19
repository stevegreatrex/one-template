# One Template

This template is a for:

* TypeScript
* ...that emits ES6
* ...and works with React
* ...that is compiled by WebPack
* ...that can be tested with WallabyJs
* ...AND with mocha

## Step 1: Git

1. `git init`
2. Create `.gitignore`

## Step 2: NPM

1. `npm init`
2. Confirm everything

## Step 3: TypeScript

1. `npm install typescript --save-dev`
2. Create `src` folder & sample class (`Example.ts`)
3. Create `tsconfig.json`
4. Set up VSCode task runner to build TypeScript (see `.vscode/tasks.json`)

## Step 4: React

1. Install react & react-dom: `npm install react react-dom --save`
2. Install typings: `npm install @types/react @types/react-dom --save-dev`
3. Create sample component (`src/ExampleComponent.tsx`)
4. Add `index.tsx` entry point that: 
   - Imports react & react-dom
   - Locate an HTML element
   - Renders `ExampleComponent` into it

## Step 5: WebPack (production)

1. Install webpack: `npm install webpack --save-dev`
2. Install babel with presets: `npm install babel-core babel-polyfill babel-preset-es2015 babel-preset-react --save-dev`
3. Install babel & typescript loaders: `npm install babel-loader ts-loader --save-dev`
4. Configure babel to use the installed preset (see `.babelrc`)
5. Add `build` script to `package.json`

## Step 6: WebPack (dev)

1. Install dev server `npm install webpack-dev-server --save-dev`
2. Add `webpack.dev.js` configuration
2. Add `devServer.js` to run `WebpackDevServer`
3. Add `start` script to `package.json`
4. Add HTML entrypoint `index.html`

## Step 7: mocha

Note: primary development will be using WallabyJs.  Mocha is included to allow
other devs & build servers to run tests.  I am certain there is a better way
to implement this!

1. Install mocha: `npm install mocha --save-dev`
2. Install shouldjs: `npm install should --save-dev` (note: not using `chai` because it is not compliant with `"use strict"`)
3. Install types for both: `npm install @types/should @types/mocha --save-dev`
4. Add `require.d.ts` to support old-style `require('should')` in tests
5. Create example tests `spec/Example.spec.ts`, `spec/ExampleComponent.spec.ts`
6. Create `spec/allTests.js` to discover and automaticaly require every spec file
7. Add new webpack configuration for test:
   - use `allTests.js` as an entry point
   - output to new `tests.js` file in temp folder
8. Add `pretest` command to `package.json` that compiles the tests (targetting node to support mocha)
9. Add `test` command to `package.json` to run tests using babel compiler

## Step 8: WallabyJs