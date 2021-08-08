# lambda-dom

**Functions for browser development that help with programming web projects in a functional style.**

[![npm version](https://badge.fury.io/js/lambda-dom.svg)](https://badge.fury.io/js/lambda-dom)
[![Build Status](https://travis-ci.com/JJWesterkamp/lambda-dom.svg?branch=master)](https://travis-ci.com/JJWesterkamp/lambda-dom)
[![Coverage Status](https://coveralls.io/repos/github/JJWesterkamp/lambda-dom/badge.svg?branch=master)](https://coveralls.io/github/JJWesterkamp/lambda-dom?branch=master)

This package aims to provide some convenient, practical helpers for DOM manipulation and interaction, querying elements and implementing safe continuation patterns to facilitate a slightly more functional programming style in vanilla web projects.

Many functions are curried, [the Sanctuary JS way](https://github.com/sanctuary-js/sanctuary#-currying), but not all of them. There are also some functions that take rest parameters: `(...args)`. It just depends on the situation.

## Quick links
- [npm]
- [Github][gh]
- [Changelog][changelog]
- [JSFiddle][fiddle]
- [jsDelivr]

## Installation & usage

### npm

Install the package with npm:

```text
npm install --save lambda-dom
```

All functions are exported from one index file. Import the functions you want to use:

```typescript
import { deferFrames, getMeta, touchAll, ... } from 'lambda-dom'
```

### cdn

[![UMD bundle](https://badgen.net/badgesize/gzip/file-url/https/cdn.jsdelivr.net/npm/lambda-dom/umd/lambda-dom.min.js?color=cyan&label=download%20size%20-%20gzipped&cache=600)][jsdelivr]

Alternatively you can grab the UMD bundle from [a CDN like jsDelivr][jsdelivr] to get started quickly:

```html
<!-- VERSIONED (safe) -->
<!-- Minified - Extended URL has sourcemaps support -->
<script src="https://cdn.jsdelivr.net/npm/lambda-dom@2.0.2"></script>
<script src="https://cdn.jsdelivr.net/npm/lambda-dom@2.0.2/umd/lambda-dom.min.js"></script>

<!-- Non-minified -->
<script src="https://cdn.jsdelivr.net/npm/lambda-dom@2.0.2/umd/lambda-dom.js"></script>

<!-- LATEST (risky in terms of potential breaking changes) -->
<!-- Minified - Extended URL version has sourcemaps support -->
<script src="https://cdn.jsdelivr.net/npm/lambda-dom"></script>
<script src="https://cdn.jsdelivr.net/npm/lambda-dom/umd/lambda-dom.min.js"></script>

<!-- Non-minified -->
<script src="https://cdn.jsdelivr.net/npm/lambda-dom/umd/lambda-dom.js"></script>
```
[Here's a jsfiddle][fiddle] that includes the bundle from jsDelivr. The bundle exposes the global variable `LD` that contains all the functions:

```html
<script>
    LD.deferFrames(100, function() {
        console.log('100 animation frames later...');
    });
</script>
```

## Contributing

If you have suggestions how to improve this package, or
want to contribute by adding new useful functions you're absolutely welcome to do so. File an issue, or even better, submit a PR. If you like this package and think it is useful please leave a star on Github 😃

## Development and testing

**Install (This package requires `yarn v1` for dependency management)** - To get started, clone the repository and install the dependencies. If you don't have yarn installed you can use `npx` to install:

```
npx yarn
```

**Build** - There are 3 builds for the package: ES modules, CommonJS modules, and UMD bundles. The package can be built with:

```
npm run build
```

**Testing** - The test suite is built with Jest and run with `ts-jest`, and can be run with:

```
npm run test
```

## License

The MIT License (MIT). See [license file] for more information.

[license file]: https://github.com/JJWesterkamp/lambda-dom/blob/master/LICENSE
[declaration file]: https://github.com/JJWesterkamp/lambda-dom/blob/master/lambda-dom.d.ts
[npm]: https://www.npmjs.com/package/lambda-dom
[gh]: https://github.com/JJWesterkamp/lambda-dom
[changelog]: https://github.com/JJWesterkamp/lambda-dom/blob/master/CHANGELOG.md
[jsdelivr]: https://www.jsdelivr.com/package/npm/lambda-dom
[fiddle]: https://jsfiddle.net/JJWesterkamp/8xh0cLtk/
