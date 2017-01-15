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

## Step 7: mocha

## Step 8: WallabyJs

## Step 9: HTML Entry Point