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
- [API documentation][docs]
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

## Available functions

Below is an overview of the included functions. Visit the [documentation page][docs] for the full documentation of this package, including type signatures and examples.

- ### `DOMReadyP` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#domreadyp) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/DOMReadyP.ts)

  Returns a promise that resolves as soon as possible after the DOM content is loaded. If the `document.readyState` is
  `'interactive'` or `'complete'` at call-time, the returned promise resolves immediately, otherwise it resolves upon the DOMContentLoaded event.

- ### `addClasses` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#addclasses) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/addClasses.ts)

  Curried function that first takes a list of classes, then returns a new function that takes the element to add those classes to.

- ### `addClassesForMS` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#addclassesforms) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/addClassesForMS.ts)

  Adds classes to an element for a given amount of milliseconds.

- ### `addClassesForNFrames` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#addclassesfornframes) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/addClassesForNFrames.ts)

  Adds classes to an element for a given amount of animation frames.

- ### `deferFrames` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#deferframes) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/deferFrames.ts)

  Takes a positive (>= 0) integer `n` and a callback function, and executes the callback function after n animation frames have passed.

- ### `deferFramesP` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#deferframesp) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/deferFramesP.ts)

  Returns a `Promise<void>` that resolves after n animation frames have passed. Like `deferFrames` but 'portable', so that many callbacks can subscribe to the 'event' of n frames having passed.

- ### `display` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#display) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/display.ts)

  Takes a CSS display value and returns a function that takes elements. When applied to an element the returned function assigns the given display value to the given element's `style.display` property.

- ### `displayIf` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#displayif) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/displayIf.ts)

  Takes a boolean condition and a CSS display value, and returns a function that takes elements. The returned function will set `style.display` onto given elements to either given value or to `'none'` based on the given cond boolean.

- ### `displayUsing` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#displayusing) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/displayUsing.ts)

  Takes a predicate function for elements and a CSS display value, and returns a function that takes elements. The returned function will set `style.display` onto given elements to either given value or to `'none'` based on the result of applying the predicate to those elements.

- ### `getMeta` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#getmeta) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/getMeta.ts)

  Get the value of the content attribute for the first (and presumably only) `<meta>` element with given name as the value for its name attribute. Optionally takes a transformer to deserialize string values.

- ### `hide` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#hide) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/hide.ts)

  Hide the given element through the `style.display` property. This is a specialisation of `display()` that always sets display to `'none'`.

- ### `innerHTML` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#innerhtml) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/innerHTML.ts)

  Takes an HTML string or `null`, and returns a function that takes `Element` objects. Sets `innerHTML` of given elements to the given string, or to an empty string if given `null`.

- ### `innerText` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#innertext) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/innerText.ts)

  Takes a string or `null`, and returns a function that takes `HTMLElement` objects. Sets `innerText` of given elements to the given string, or to an empty string if given `null`.

- ### `onDOMReady` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#ondomready) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/onDOMReady.ts)

  Takes a callback that is executed as soon as possible after the DOM content is loaded. If the `document.readyState` is either `'interactive'` or `'complete'` at call-time, the callback is called immediately, otherwise it is called upon the DOMContentLoaded event.

- ### `onWindowLoad` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#onwindowload) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/onWindowLoad.ts)

  Takes a callback that is executed as soon as possible after the window is loaded. If the `document.readyState` is `'complete'` at call-time, the callback is called immediately, otherwise it is called upon the window load event.

- ### `preventDefault` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#preventdefault) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/preventDefault.ts)

  Takes events and calls their `.preventDefault()` method.

- ### `queryAll` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#queryall) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/queryAll.ts)

  Calls `querySelectorAll` with given selector on given scope, or on `document` by default when the scope is omitted. Returns an array containing the found elements.

- ### `queryAllWithin` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#queryallwithin) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/queryAllWithin.ts)

  Takes an element as scope for CSS selector queries. Returns a function that takes selectors to query elements for within the set scope. The returned function finds all elements matching given selector and returns them in an array.

- ### `queryOne` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#queryone) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/queryOne.ts)

  Calls `querySelector` with given `selector` on given `scope`, or on `document` by default when the scope is omitted. Returns the first element matching given selector if any exists, or `null` otherwise. Attempts to parse the given CSS selector to determine the element type.

- ### `queryOneWithin` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#queryonewithin) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/queryOneWithin.ts)

  Takes an element as scope for CSS selector queries. Returns a function that takes selectors to query elements for within the set scope. The returned function finds the first element matching given selector and returns it. Returns `null` if no matching element exists.

- ### `readDataset` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#readdataset) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/readDataset.ts)

  Read dataset values. Takes a dataset key and optionally a transformer for the corresponding value, and returns a new function that takes the element to read the dataset key from.

- ### `remove` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#remove) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/remove.ts)

  Removes given element from the DOM if it's currently in it.

- ### `removeClasses` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#removeclasses) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/removeClasses.ts)

  Curried function that first takes a list of classes, then returns a new function that takes the element to remove those classes from.

- ### `removeClassesForMS` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#removeclassesforms) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/removeClassesForMS.ts)

  Removes classes from an element for a given amount of milliseconds.

- ### `removeClassesForNFrames` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#removeclassesfornframes) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/removeClassesForNFrames.ts)

  Removes classes from an element for a given amount of animation frames.

- ### `setMeta` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#setmeta) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/setMeta.ts)

  Takes a string name and returns a new function that takes a string content, and then updates the `<meta>` tag with the given name if it exists, or otherwise creates a new one. The meta element to which the content value was set is returned for reference. When a new element is created it will be appended to the end of `<head>`.

- ### `show` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#show) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/show.ts)

  Shows the given element by unsetting any inline `style.display` value. This is a specialisation of `display()` that always unsets inline display.

  **Note**

  This function assumes that given elements are shown by default - ie. there's no CSS rule that has set the element's display to `'none'`.

- ### `showIf` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#showif) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/showIf.ts)

  Takes a boolean condition, and returns a function that takes elements. The returned function will unset `style.display` onto a given element if the given condition is `true`. If the condition is `false`, `style.display` is set to `'none'`.

  **Note**

  This function assumes that given elements are shown by default - ie. there's no CSS rule that has set the element's display to `'none'`.

- ### `showUsing` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#showusing) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/showUsing.ts)

  Takes a predicate function for elements and returns a function that takes elements to conditionally show depending on the result of applying the predicate function to given elements.

  **Note**

  This function assumes that given elements are shown by default - ie. there's no CSS rule that has set the element's display to `'none'`.

- ### `style` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#style) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/style.ts)

  Takes an object of style attribute values, and returns a new function that takes an element to apply those styles to.

- ### `toggleClasses` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#toggleclasses) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/toggleClasses.ts)

  Curried function that first takes a list of classes, then returns a new function that takes the element on which to toggle those classes. The second function optionally takes the second argument `force: boolean` to use on the native `DOMTokenList.toggle()` method. Note that the value for force will be the same for all classes that are toggled.

- ### `touchAll` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#touchall) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/touchAll.ts)

  Takes an array of selectors and a callback function. When for all selectors an element is found, the callback is called with each found element in order. Optionally takes a scope as third argument to use for the element search.

- ### `touchAllP` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#touchallp) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/touchAllP.ts)

  Takes an array of selectors. Returns a promise that will only resolve when for all selectors an element is found. The promise value is an array of the elements in the order of the selector array. Optionally takes a scope as third argument to use for the element search.

  This function is useful as an alternative for `touchAll` in async functions. When awaited it'll block all further execution of the function when not all elements are found.

- ### `touchElement` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#touchelement) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/touchElement.ts)

  Finds the first element within the set scope that matches selector. If found the element is applied to the given callback function, and the function's return value will be propagated as return value of `touchElement`. If no element is found, the callback is not invoked, and `null` is returned from `touchElement`.

- ### `touchElementP` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#touchelementp) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/touchElementP.ts)

  Finds the first element within the set scope that matches a given selector. If found the returned promise resolves with the element. If no element is found, the promise will never resolve. Like `touchElement` but 'portable', so that many callbacks can subscribe to the 'event' of the element being found.

- ### `windowLoadP` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#windowloadp) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/windowLoadP.ts)

  Returns a promise that resolves as soon as possible after the window is loaded. If the `document.readyState` is `'complete'` at call-time, the returned promise resolves immediately, otherwise it resolves upon the window load event.

- ### `writeDataset` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#writedataset) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/writeDataset.ts)

  Write dataset values. Takes a key, and returns a new function that takes the value, which in turn returns the last function that takes the element to write the key-value pair to.

[license file]: https://github.com/JJWesterkamp/lambda-dom/blob/master/LICENSE
[declaration file]: https://github.com/JJWesterkamp/lambda-dom/blob/master/lambda-dom.d.ts
[npm]: https://www.npmjs.com/package/lambda-dom
[gh]: https://github.com/JJWesterkamp/lambda-dom
[docs]: https://jjwesterkamp.github.io/lambda-dom/
[changelog]: https://github.com/JJWesterkamp/lambda-dom/blob/master/CHANGELOG.md
[jsdelivr]: https://www.jsdelivr.com/package/npm/lambda-dom
[fiddle]: https://jsfiddle.net/JJWesterkamp/8xh0cLtk/
