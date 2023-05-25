[![Commitizen-friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# React Component Library Boilerplate

This project is a boilerplate to create a react component library using React and TypeScript.

# Builds

- `yarn build`

# Linting

- `yarn lint`

# Testing

- `yarn test`

# Storybook

If you want more information about Storybook, you can find it here [Storybook](https://storybook.js.org/).

Storybook by default runs on http://localhost:6006/

## Running Storybook

- `yarn storybook`

## Building Storybook

- `yarn build-storybook`

# Releasing as a Package

## Prerequisites

You will need a couple of things to have a build step setup. Let's install them first:

```
yarn add --dev rollup rollup-plugin-peer-deps-external rollup-plugin-postcss rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve
```

Then you need to create the `rollup.config.js` file in the root directory, with these contents:

```js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs(), typescript({ useTsconfigDeclarationDir: true }), postcss()],
};
```

Now you could have a script calling `rollup -c` and your project would be built. Be aware that the `input` should point to the entry point of your application. In the case of this example, `src/index.ts`. Also make sure that your `package.json` has the `main` and `module` properties set.

## Release

If you need your project to be installable by others, you should release it as a package. To get that done, you need to first install one dependency: the `release-it`. This package will do all the heavy lifting to create the release for you, as long as your commits are compliant to the Conventional Commits Guidelines:

- It checks your commits since the previous release looking for feats and fixes
- It creates a commit bumping the version in your `package.json`
- It creates a git tag of the version number
- And last but not least, generates a changelog

## Setting Up

Install the required dependency:

```
yarn add --dev release-it @release-it/conventional-changelog
```

Create the scripts that will help you through this:

- `package:clean`: this is just a utility to delete the build directory and its files
- `package:copy`: this is necessary to copy the `package.json` to the build directory
- `package:build`: this will run `rollup` and the other two scripts
- `package:release`: this will be responsible for creating the release, it will all be handled by `release-it`
- `package:publish`: this will be responsible for calling the build script and publishing your release right after

Your `package.json` should look like this:

```json
"scripts": {
  "package:clean": "rm -rf dist",
  "package:copy": "cp package.json dist",
  "package:build": "yarn package:clean && rollup -c && yarn package:copy",
  "package:release": "release-it",
  "package:publish": "yarn package:build && yarn publish",
},
```

# Development

## Dependencies

This component library is based on Material UI and Styled Components.

## Git flow

### Commit messages

It uses [commitlint](https://commitlint.js.org/) to lint commit messages.
Use the following format for the commit messages and pull request titles.

```
action(ticket-number): short description

[Optional] long description
```

### Deployment

### Automatic Deployment

There's a bitbucket pipeline to deploy the library to AWS CodeArtifact when the `master` branch is changed.

### Manual Deployment

Run the following commands to publish the new version of component library.

- `yarn package:release`
- `yarn package:publish`

`yarn package:release` will make a commit with updated Change log and package.json.
