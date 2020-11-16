# lambda-dom

Some DOM helper functions for programming web projects in a functional style.

## Installation

Install the package with npm:
```
npm install lambda-dom
```

## Disclaimer ;)

This package does not aim to use the best FP practices, nor to be as pure as it gets. Instead it aims to provide some convenient
helpers for DOM manipulation, querying elements, and some continuation patterns to facilitate a
slightly more functional style. Many functions are curried (the easy way) but not all of them.
There are also some functions that take rest parameters: `(...args)`. It just depends on the situation.

**For example:**

In the case of DOM querying lambda-dom provides `touchElement` and `touchAll`,
and `touchElementP` and `touchAllP` (the promise equivalents) that all take a callback that will only run if
for one or many selectors HTML elements can be found. This reduces the amount of explicit null-checking
on element queries and the amount of required intermediate constants that hold element references.

## API



## Contributing

I mainly wrote this package for my own convenience. However, if you have suggestions how to improve it, or
want to contribute by adding new useful functions you're absolutely welcome to do so. File an issue, or even better, submit a PR.
If you like this package and think it is useful don't forget to star it!

## License

The MIT License (MIT). See [license file](https://github.com/JJWesterkamp/lambda-dom/blob/master/LICENSE) for more information.
