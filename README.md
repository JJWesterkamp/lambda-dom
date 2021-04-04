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

  Shows given element through the `style.display` property. Optionally takes a second argument denoting the value for style.display. A null value will unset any inline attribute for display to give back display control to the CSS stylesheet declarations.
  
- ### `displayIf` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#displayif) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/displayIf.ts)

  Sets the `style.display` value on elements if a given condition is truthy. Otherwise given elements are being hidden. Uses `display()` and `hide()` under the hood.
  
- ### `getMeta` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#getmeta) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/getMeta.ts)

  Get the value of the content attribute for the first (and presumably only) `<meta>` element with given name as the value for its name attribute. Optionally takes a transformer to deserialize string values.

- ### `hide` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#hide) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/hide.ts)

  Hide the given element through the `style.display` property.

- ### `onDOMReady` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#ondomready) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/onDOMReady.ts)

  Takes a callback that is executed as soon as possible after the DOM content is loaded. If the `document.readyState` is either `'interactive'` or `'complete'` at call-time, the callback is called immediately, otherwise it is called upon the DOMContentLoaded event.

- ### `onWindowLoad` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#onwindowload) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/onWindowLoad.ts)

  Takes a callback that is executed as soon as possible after the window is loaded. If the `document.readyState` is `'complete'` at call-time, the callback is called immediately, otherwise it is called upon the window load event.

- ### `queryAll` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#queryall) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/queryAll.ts)

  Calls `querySelectorAll` with given selector on given scope, or on `document` by default when the scope is omitted. Returns an array containing the found elements.

- ### `queryWithin` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#querywithin) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/queryWithin.ts)

  Takes an element as scope for CSS selector queries. Returns a function that takes selectors to query elements for within the given scope.
  
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

  Shows the given element by unsetting any inline `style.display` value, assuming no display: none rule is set in CSS.

- ### `showIf` [full docs](https://jjwesterkamp.github.io/lambda-dom/modules.html#showif) | [source](https://github.com/JJWesterkamp/lambda-dom/blob/master/src/showIf.ts)

  Takes a boolean condition, and returns a function that takes elements. The returned function will unset `style.display` onto a given element if the given condition is `true`. If the condition is `false`, `style.display` is set to `'none'`.

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
