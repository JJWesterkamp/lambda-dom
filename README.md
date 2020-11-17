# lambda-dom

[![npm version](https://badge.fury.io/js/lambda-dom.svg)](https://badge.fury.io/js/lambda-dom)
[![Build Status](https://travis-ci.com/JJWesterkamp/lambda-dom.svg?branch=master)](https://travis-ci.com/JJWesterkamp/lambda-dom)
[![Coverage Status](https://coveralls.io/repos/github/JJWesterkamp/lambda-dom/badge.svg?branch=master)](https://coveralls.io/github/JJWesterkamp/lambda-dom?branch=master)

Some DOM helper functions for programming web projects in a functional style.

## Installation

Install the package with npm
```
npm install --save lambda-dom
```
or yarn:
```
yarn add lambda-dom
```

## API

Coming soon! For now the source files are all documented with examples, and their declarations are bundled in the [declaration file].

## Disclaimer

This package does not aim to use the best FP practices, nor to be as pure as it gets. Instead it aims to provide some convenient
helpers for DOM manipulation, querying elements, and some continuation patterns to facilitate a
slightly more functional style. Many functions are curried (the easy way) but not all of them.
There are also some functions that take rest parameters: `(...args)`. It just depends on the situation.

**For example:**

In the case of DOM querying lambda-dom provides `touchElement` and `touchAll`,
and `touchElementP` and `touchAllP` (the promise equivalents) that all take a callback that will only run if
for one or many selectors HTML elements can be found. This reduces the amount of explicit null-checking
on element queries and the amount of required intermediate constants that hold element references.

## Contributing

I mainly wrote this package for my own convenience. However, if you have suggestions how to improve it, or
want to contribute by adding new useful functions you're absolutely welcome to do so. File an issue, or even better, submit a PR.
If you like this package and think it is useful don't forget to star it!

## License

The MIT License (MIT). See [license file] for more information.

[license file]: https://github.com/JJWesterkamp/lambda-dom/blob/master/LICENSE
[declaration file]: https://github.com/JJWesterkamp/lambda-dom/blob/master/lambda-dom.d.ts