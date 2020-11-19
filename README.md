# lambda-dom

[![npm version](https://badge.fury.io/js/lambda-dom.svg)](https://badge.fury.io/js/lambda-dom)
[![Build Status](https://travis-ci.com/JJWesterkamp/lambda-dom.svg?branch=master)](https://travis-ci.com/JJWesterkamp/lambda-dom)
[![Coverage Status](https://coveralls.io/repos/github/JJWesterkamp/lambda-dom/badge.svg?branch=master)](https://coveralls.io/github/JJWesterkamp/lambda-dom?branch=master)

Some DOM helper functions for programming web projects in a functional style.

> This package does not (yet) aim to use the best FP practices, nor to be as pure as it gets. Instead it aims to provide some convenient, practical helpers for DOM manipulation, querying elements, and some continuation patterns to facilitate a slightly more functional style. Many functions are curried (the easy way) but not all of them. There are also some functions that take rest parameters: `(...args)`. It just depends on the situation.

## Quick links
- [npm]
- [Github][gh]
- [API documentation][docs]
- [Changelog][changelog]
- [JSFiddle][fiddle]
- [jsDelivr]

## Installation & usage

### npm

Install the package with npm or yarn:

```shell
npm install --save lambda-dom
## or
yarn add lambda-dom
```

All functions are exported from one index file. Import the functions you want to use:

```typescript
import { deferFrames, getMeta, touchAll, ... } from 'lambda-dom'
```

### cdn

Alternatively you can grab the UMD bundle from [a CDN like jsDelivr][jsdelivr] to get started quickly. The bundle exposes the global variable `LD` that contains all the functions. [Here's a fiddle][fiddle] that includes the bundle from jsDelivr.

```html
<script src="https://cdn.jsdelivr.net/npm/lambda-dom/umd/lambda-dom.js">

<script>
    LD.deferFrames(100, function() {
        console.log('100 animation frames later...');
    });
</script>
```

## API Documentation

Visit the [documentation page][docs] for the API documentation of this package.

## Contributing

I mainly wrote this package for my own convenience. However, if you have suggestions how to improve it, or
want to contribute by adding new useful functions you're absolutely welcome to do so. File an issue, or even better, submit a PR. If you like this package and think it is useful please leave a star on Github :)

## License

The MIT License (MIT). See [license file] for more information.

[license file]: https://github.com/JJWesterkamp/lambda-dom/blob/master/LICENSE
[declaration file]: https://github.com/JJWesterkamp/lambda-dom/blob/master/lambda-dom.d.ts
[npm]: https://www.npmjs.com/package/lambda-dom
[gh]: https://github.com/JJWesterkamp/lambda-dom
[docs]: https://jjwesterkamp.github.io/lambda-dom/
[changelog]: https://github.com/JJWesterkamp/lambda-dom/blob/master/CHANGELOG.md
[jsdelivr]: https://www.jsdelivr.com/package/npm/lambda-dom
[fiddle]: https://jsfiddle.net/JJWesterkamp/8xh0cLtk/