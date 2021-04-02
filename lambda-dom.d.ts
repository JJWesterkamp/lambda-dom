/**
 * Curried function that first takes a list of classes, then returns a new function that
 * takes the element to add those classes to.
 *
 * @param classes Rest parameter for one or multiple classes to add.
 * @param element The element to add the classes to.
 *
 * @example
 * ```typescript
 * declare const elements: Element[]
 * declare const someElement: Element
 *
 * // You can either partially apply addClasses to re-use it:
 * const addTwoClasses = addClasses('class-one', 'class-two')
 *
 * elements.forEach(addTwoClasses)
 *
 * // Or execute addClasses in one go:
 * addClasses('class-one', 'class-two') (someElement)
 * ```
 */
export declare function addClasses(...classes: string[]): (element: Element) => void;
/**
 * Adds classes to an element for a given amount of milliseconds.
 *
 * @param ms The amount of milliseconds to add the classes for
 * @param classes Rest parameter for one or multiple classes to temporarily add
 * @param element The element to add the classes to
 *
 * @example
 *
 * ```typescript
 * declare const element: Element
 * addClassesForMS(500, 'class-a', 'class-b') (element)
 * ```
 */
export declare function addClassesForMS(ms: number, ...classes: string[]): (element: Element) => void;
/**
 * Adds classes to an element for a given amount of animation frames.
 *
 * @param n The amount of animation frames to add the classes for.
 * @param classes Rest parameter for one or multiple classes to temporarily add.
 * @param element The element to add the classes to.
 *
 * @example
 *
 * ```typescript
 * declare const element: Element
 * addClassesForNFrames(10, 'class-a', 'class-b') (element)
 * ```
 */
export declare function addClassesForNFrames(n: number, ...classes: string[]): (element: Element) => void;
/**
 * Takes a positive (>= 0) integer `n` and a callback function, and executes the callback function after `n`
 * animation frames have passed.
 *
 * @param n The amount of animation frames to wait.
 * @param handler The callback function to run after `n` animation-frames have passed.
 *
 * @Todo Add the possibility to cancel. The requires the request ID of the latest request.
 *
 * @example
 *
 * ```typescript
 * declare const f: () => void
 * // Run `f` after ten animation frames
 * deferFrames(10, f)
 *
 * // The following 2 statements are equivalent:
 * deferFrames(0, f)
 * requestAnimationFrame(f)
 *
 * // And the following 2 statements are equivalent:
 * deferFrames(1, f)
 * requestAnimationFrame(() => requestAnimationFrame(f))
 *
 * // Etc..
 * ```
 */
export declare function deferFrames(n: number, handler: () => any): void;
/**
 * Returns a `Promise<void>` that resolves after `n` animation frames have passed.
 * Like {@linkcode deferFrames} but 'portable', so that many callbacks can subscribe
 * to the 'event' of `n` frames having passed.
 *
 * @param n The amount of animation frames to wait before the returned promise resolves.
 *
 * @example
 *
 * ```typescript
 * async function f() {
 *      // Do something immediately...
 *      await deferFramesP(10)
 *      // Do something else after 10 animation frames:
 * }
 * ```
 */
export declare function deferFramesP(n: number): Promise<void>;
/**
 * Returns a promise that resolves as soon as possible after the window is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is `'interactive'` or `'complete'` at call-time, the returned promise resolves immediately, otherwise it resolves upon
 * the DOMContentLoaded event.
 *
 * @return {Promise<void>}
 */
export declare const DOMReadyP: () => Promise<void>;
/**
 * Shows given element through the style.display property. Optionally takes a second
 * argument denoting the value for style.display. A `null` value will unset any inline
 * attibute for `display` to give back display control to the CSS stylesheet declarations.
 *
 * @param value The display CSS value to use. When `null` any inline display value is removed.
 * @param element The target element to set the display value on.
 *
 * @example
 * ```typescript
 * declare const someElement: Element
 *
 * // This will unset any inline style for `display` and let CSS take over control
 * display(null) (someElement)
 *
 * // This will explicitly set the display property to 'flex'
 * display('flex') (someElement)
 *
 * // and this will hide the element
 * display('none') (someElement)
 *
 * // You can store the display strategies in advance:
 * const hideFn = display('none')
 * const showFn = display('grid')
 *
 * // And then use them on any element conditionally:
 * declare const shouldShow: boolean
 * (shouldShow ? showFn : hideFn) (someElement)
 * ```
 */
export declare function display(value: string | null): (element: HTMLElement) => void;
/**
 * Get the value of the content attribute for the first (and presumably only)
 * `<meta>` element with given `name` as the value for its name attribute.
 * Optionally takes a transformer to deserialize string values.
 *
 * @param name The value for the `name` attribute to find the `<meta>` element by.
 *
 * @example
 *
 * Considering these meta tags:
 *
 * ```html
 * <meta name="some-json-meta" content='{ "foo": "bar", "baz": 42 }'>
 * <meta name="just-string-meta" content="Lorem ipsum">
 * ```
 *
 * And this object interface:
 *
 * ```typescript
 * interface JsonMeta { foo: string, baz: number }
 * ```
 *
 * We can get the JSON data and parse it like so:
 *
 * ```typescript
 * const jsonMeta: A = getMeta<JsonMeta>('some-json-meta', JSON.parse)
 * ```
 *
 * and simple string metadata doesn't need to be transformed:
 *
 * ```typescript
 * const textgMeta: B = getMeta('just-string-meta')
 * ```
 *
 * And because the queries can fail:
 *
 * ```typescript
 * type A = null | JsonMeta
 * type b = null | string
 * ```
 */
export declare function getMeta(name: string): string | null;
/**
 * Get the value of the content attribute for the first (and presumably only)
 * `<meta>` element with given `name` as the value for its name attribute.
 * Optionally takes a transformer to deserialize string values.
 *
 * @param name The value for the `name` attribute to find the `<meta>` element by.
 * @param transformer A transformer function that deserializes content values.
 *
 * @example
 *
 * Considering these meta tags:
 *
 * ```html
 * <meta name="some-json-meta" content='{ "foo": "bar", "baz": 42 }'>
 * <meta name="just-string-meta" content="Lorem ipsum">
 * ```
 *
 * And this object interface:
 *
 * ```typescript
 * interface JsonMeta { foo: string, baz: number }
 * ```
 *
 * We can get the JSON data and parse it like so:
 *
 * ```typescript
 * const jsonMeta: A = getMeta<JsonMeta>('some-json-meta', JSON.parse)
 * ```
 *
 * and simple string metadata doesn't need to be transformed:
 *
 * ```typescript
 * const textgMeta: B = getMeta('just-string-meta')
 * ```
 *
 * And because the queries can fail:
 *
 * ```typescript
 * type A = null | JsonMeta
 * type b = null | string
 * ```
 */
export declare function getMeta<T>(name: string, transformer: (content: string) => T): T | null;
/**
 * Hide the given element through the style.display property.
 *
 * @param element The element to hide.
 * @example
 *
 * ```typescript
 * declare const someElement: Element
 *
 * // Hides the given element
 * hide(someElement)
 *
 * // This is equivalent to:
 * display('none') (someElement)
 * ```
 */
export declare function hide(element: HTMLElement): void;
/**
 * Takes a callback that is executed as soon as possible after the DOM content is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is either `'interactive'` or `'complete'` at call-time, the callback is called immediately,
 * otherwise it is called upon the DOMContentLoaded event.
 *
 * @param {Function} fn
 * @return {Promise} A promise that resolves with the eventual return value of given callback.
 */
export declare function onDOMReady<T>(fn: () => T): Promise<T>;
/**
 * Takes a callback that is executed as soon as possible after the window is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is `'complete'` at call-time, the callback is called immediately, otherwise it is called upon
 * the window load event.
 *
 * @param {Function} fn
 * @return {Promise} A promise that resolves with the eventual return value of given callback.
 */
export declare function onWindowLoad<T>(fn: () => T): Promise<T>;
/**
 * Calls `querySelectorAll` with given `selector` on given `scope`, or on `document` by default when the
 * scope is omitted. Returns an array containing the found elements.
 *
 * @param selector The selector to match elements against.
 * @param scope The scope of the element query. When omitted `queryAll` performs a global search.
 *
 * @example
 *
 * ```typescript
 * // Recognizes keys of HTMLElementTagNameMap:
 * const anchors = queryAll('a') // HTMLAnchorElement[]
 *
 * // Recognizes keys of SVGElementTagNameMap:
 * const paths = queryAll('path') // SVGPathElement[]
 *
 * // Defaults to Element, or accepts an explicit type argument for the searched elements:
 * const elements = queryAll('.some-element') // Element[]
 * const buttons = queryAll<HTMLButtonElement>('.my-button') // HTMLButtonElement[]
 * ```
 */
export declare function queryAll<K extends keyof HTMLElementTagNameMap>(selector: K, scope?: ParentNode): HTMLElementTagNameMap[K][];
export declare function queryAll<K extends keyof SVGElementTagNameMap>(selector: K, scope?: ParentNode): SVGElementTagNameMap[K][];
export declare function queryAll<T extends Element>(selector: string, scope?: ParentNode): T[];
/**
 * Read dataset values. Takes a dataset key and optionally a transformer for the corresponding value,
 * and returns a new function that takes the element to read the dataset key from.
 *
 * @param key The dataset key to read (camelCase, like the native dataset API).
 * @param element The element to read the dataset value from.
 *
 * @example
 *
 * ```typescript
 * declare const someElement: HTMLElement
 *
 * const x: T = readDataset('someKey') (someElement)
 * const y: U = readDataset('someOtherKey', parseInt) (someElement)
 *
 * type T = undefined | string
 * type U = undefined | number
 * ```
 */
export declare function readDataset(key: string): (element: HTMLElement) => string | undefined;
/**
 * Read dataset values. Takes a dataset key and optionally a transformer for the corresponding value,
 * and returns a new function that takes the element to read the dataset key from.
 *
 * @param key The dataset key to read (camelCase, like the native dataset API).
 * @param transform The optional transformer function for dataset values.
 * @param element The element to read the dataset value from.
 *
 */
export declare function readDataset<T>(key: string, transform: (value: string) => T): (element: HTMLElement) => T | undefined;
/**
 * Curried function that first takes a list of classes, then returns a new function that
 * takes the element to remove those classes from.
 *
 * @param classes Rest parameter for one or multiple classes to remove.
 * @param element The element to remove the classes from.
 *
 * @example
 *
 * ```typescript
 * declare const someElement: Element
 * declare const elements: Element[]
 *
 * // You can either partially apply removeClasses:
 * const removeTwoClasses = removeClasses('class-one', 'class-two')
 * elements.forEach(removeTwoClasses)
 *
 * // Or execute removeClasses in one go:
 * removeClasses('class-one', 'class-two', 'even-more-classes')(element)
 * ```
 */
export declare function removeClasses(...classes: string[]): (element: Element) => void;
/**
 * Removes classes from an element for a given amount of milliseconds.
 *
 * @param ms The amount of milliseconds to remove the classes for.
 * @param classes Rest parameter for one or multiple classes to remove.
 * @param element The element to remove the classes from.
 *
 * @example
 * ```typescript
 * declare const element: Element
 * removeClassesForMS(500, 'class-a', 'class-b') (element)
 * ```
 */
export declare function removeClassesForMS(ms: number, ...classes: string[]): (element: Element) => void;
/**
 * Removes classes from an element for a given amount of animation frames.
 *
 * @param n The amount of animation frames to remove the classes for.
 * @param classes Rest parameter for one or multiple classes to temporarily remove.
 * @param element The element to remove the classes from.
 *
 * @example
 *
 * ```typescript
 * declare const element: Element
 * removeClassesForNFrames(10, 'class-a', 'class-b') (element)
 * ```
 */
export declare function removeClassesForNFrames(n: number, ...classes: string[]): (element: Element) => void;
/**
 * Takes a string name and returns a new function that takes a string content, and
 * then updates the `<meta>` tag with the given name if it exists, or otherwise
 * creates a new one. The meta element to which the content value was set is returned
 * for reference.
 *
 * When a new element is created it will be appended to the end of `<head>`.
 *
 * @param name The value for the name attribute.
 * @param content The value for the content attribute.
 *
 * @example
 * ```typescript
 * const element = setMeta('foo')('bar')
 * ```
 * This updates or creates the following element
 * ```
 * <meta name="foo" content="bar">
 * ```
 */
export declare function setMeta(name: string): (content: string) => HTMLMetaElement;
/**
 * Shows the given element by unsetting any inline `style.display` value, assuming no
 * `display: none` rule is set in CSS.
 *
 * @param element The element to unset the inline display value for.
 *
 * @example
 * ```typescript
 * declare const someElement: Element
 *
 * // Shows (or unhides) the given element, if it has no display: none set in CSS
 * show(someElement)
 *
 * // This is equivalent to:
 * display(null) (someElement)
 * ```
 */
export declare function show(element: HTMLElement): void;
/**
 * Takes an object of style attribute values, and returns a new function that takes an
 * element to apply those styles to.
 *
 * @param styles An object with inline styles to set.
 * @param element An element to apply the inline styles to.
 *
 * @example
 *
 * ```typescript
 * declare const someElement: HTMLElement
 * style({ color: 'red' }) (someElement)
 *
 * // Or partially apply to re-use the style set:
 * const warningButtonStyle = style({
 *     color: 'red',
 *     backgroundColor: 'white',
 *     border: '1px solid red',
 * })
 *
 * declare const elements: HTMLElement[]
 * elements.forEach(warningButtonStyle)
 * ```
 */
export declare function style(styles: Partial<CSSStyleDeclaration>): (element: HTMLElement) => void;
/**
 * Curried function that first takes a list of classes, then returns a new function that
 * takes the element on which to toggle those classes. The second function optionally takes
 * the second argument `force: boolean` to use on the native `DOMTokenList.toggle()` method.
 * Note that the value for `force` will be the same for all classes that are toggled.
 *
 * @param classes One or multiple classes to toggle.
 * @param element An element onto which to toggle provided classes.
 * @param force The optional boolean for force adding / removing the classes (like the native [`DOMTokenList.toggle`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle))
 *
 * @example
 *
 * ```typescript
 * declare const someElement: Element
 * declare const elements: Element[]
 *
 * // You can either partially apply toggleClasses:
 * const toggleTwoClasses = toggleClasses('class-one', 'class-two')
 * elements.forEach(toggleTwoClasses)
 *
 * // Or execute toggleClasses in one go:
 * toggleClasses('class-one', 'class-two', '...') (someElement)
 * // Equivalently
 * toggleClasses('class-one', 'class-two', '...') (someElement, undefined)
 *
 * // This is like addClasses:
 * toggleClasses('class-one', 'class-two', '...') (someElement, true)
 *
 * // This is like removeClasses:
 * toggleClasses('class-one', 'class-two', '...') (someElement, false)
 * ```
 */
export declare function toggleClasses(...classes: string[]): (element: Element, force?: boolean) => void;
/**
 * Takes an array of selectors and a callback function. When for all selectors an element is found, the callback
 * is called with each found element in order. Optionally takes a scope as third argument to use for the element search.
 *
 * Note: `touchAll` has overloads for tuples of up to 8 selectors.
 *
 * @param selectors An array of CSS-compatible selectors. For each selector an element will be searched.
 * @param cb The callback to execute when all elements are found.
 * @param scope An optional scope for the element queries.
 *
 * @example
 *
 * ```typescript
 * // Either specify the element types in the callback
 *
 * const resultA: TheType = touchAll([
 *     '.my-button',
 *     '#the-form',
 * ], (
 *     button: HTMLButtonElement,
 *     form: HTMLFormElement,
 * ) => {
 *     // do something with button and form...
 * })
 *
 * // or provide them as type arguments list, in which case
 * // the return type for `touchAll` itself is required:
 *
 * const resultB: TheType = touchAll<HTMLButtonElement, HTMLFormElement, string>([
 *     '.my-button',
 *     '#the-form',
 * ], (
 *     button,
 *     form,
 * ) => {
 *     // do something with button and form...
 * })
 *
 * // and because the queries can fail:
 *
 * type TheType = null | string
 * ```
 */
export declare function touchAll<T1 extends Element, U>(selectors: [
	string
], cb: (v1: T1) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, U>(selectors: [
	string,
	string
], cb: (v1: T1, v2: T2) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, U>(selectors: [
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, U>(selectors: [
	string,
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3, v4: T4) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, U>(selectors: [
	string,
	string,
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, U>(selectors: [
	string,
	string,
	string,
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, T7 extends Element, U>(selectors: [
	string,
	string,
	string,
	string,
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, T7 extends Element, T8 extends Element, U>(selectors: [
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => U, scope?: ParentNode): U | null;
/**
 * Takes an array of selectors. Returns a promise that will only resolve when for all selectors an element is found.
 * The promise value is an array of the elements in the order of the selector array. Optionally takes a scope as
 * third argument to use for the element search.
 *
 * This function is useful as an alternative for `touchAll` in async functions. When `await`ed  it'll block
 * all further execution of the function when not all elements are found.
 *
 * Note: `touchAllP` has overloads for tuples of up to 8 selectors.
 *
 * Like {@linkcode touchAll} but 'portable', so that many callbacks can subscribe
 * to the 'event' of the elements being found.
 *
 * @param selectors An array of CSS-compatible selectors. For each selector an element will be searched.
 * @param scope An optional scope for the element queries.
 *
 * @example
 *
 * ```typescript
 * // Without explicit type arguments:
 * const elementsPA = touchAllP(['.my-button', '#the-form'])
 * // > Promise<[Element, Element]>
 *
 * // With explicit type arguments:
 * const elementsPB = touchAllP<HTMLButtonElement, HTMLFormElement>(['.my-button', '#the-form'])
 * // > Promise<[HTMLButtonElement, HTMLFormElement]>
 * ```
 */
export declare function touchAllP<T1 extends Element>(selectors: [
	string
], scope?: ParentNode): Promise<[
	T1
]>;
export declare function touchAllP<T1 extends Element, T2 extends Element>(selectors: [
	string,
	string
], scope?: ParentNode): Promise<[
	T1,
	T2
]>;
export declare function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element>(selectors: [
	string,
	string,
	string
], scope?: ParentNode): Promise<[
	T1,
	T2,
	T3
]>;
export declare function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element>(selectors: [
	string,
	string,
	string,
	string
], scope?: ParentNode): Promise<[
	T1,
	T2,
	T3,
	T4
]>;
export declare function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element>(selectors: [
	string,
	string,
	string,
	string,
	string
], scope?: ParentNode): Promise<[
	T1,
	T2,
	T3,
	T4,
	T5
]>;
export declare function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element>(selectors: [
	string,
	string,
	string,
	string,
	string,
	string
], scope?: ParentNode): Promise<[
	T1,
	T2,
	T3,
	T4,
	T5,
	T6
]>;
export declare function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, T7 extends Element>(selectors: [
	string,
	string,
	string,
	string,
	string,
	string,
	string
], scope?: ParentNode): Promise<[
	T1,
	T2,
	T3,
	T4,
	T5,
	T6,
	T7
]>;
export declare function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, T7 extends Element, T8 extends Element>(selectors: [
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string
], scope?: ParentNode): Promise<[
	T1,
	T2,
	T3,
	T4,
	T5,
	T6,
	T7,
	T8
]>;
/**
 * Finds the first element within the set scope that matches `selector`. If found the element
 * is applied to the given callback function, and the function's return value will be propagated
 * as return value of `touchElement`. If no element is found, the callback is not invoked, and
 * `null` is returned from `touchElement`.
 *
 * @param selector A CSS-compatible selector to match the searched element against.
 * @param callback The callback to execute when the element is found.
 * @param scope An optional scope for the element query.
 *
 * @example
 * ```typescript
 * // The callback's return value is returned from touchElement:
 * const inputValue: TheType = touchElement('#my-input', (input: HTMLInputElement): string => input.value)
 *
 * // and because the query for '#my-input' can fail:
 * type TheType = string | null
 * ```
 */
export declare function touchElement<T extends Element, U = any>(selector: string, callback: (element: T) => U, scope?: ParentNode): U | null;
/**
 * Finds the first element within the set scope that matches `selector`. If found the returned
 * promise resolves with the element. If no element is found, the promise will never resolve.
 * Like {@linkcode touchElement} but 'portable', so that many callbacks can subscribe
 * to the 'event' of the element being found.
 *
 * @param selector A CSS-compatible selector to match the searched element against.
 * @param scope An optional scope for the element query.
 *
 * @example
 * ```typescript
 * const button = await touchElementP<HTMLButtonElement>('#my-button')
 * ```
 */
export declare function touchElementP<T extends Element>(selector: string, scope?: ParentNode): Promise<T>;
/**
 * Returns a promise that resolves as soon as possible after the window is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is `'complete'` at call-time, the returned promise resolves immediately, otherwise it resolves upon
 * the window load event.
 *
 * @return {Promise<void>}
 */
export declare const windowLoadP: () => Promise<void>;
/**
 * Write dataset values. Takes a key, and returns a new function that takes the value, which in turn
 * returns the last function that takes the element to write the key-value pair to.
 *
 * @param key The dataset property to write.
 * @param value The value to write to the property.
 * @param element An element upon which to perform the dataset update.
 *
 * @example
 *
 * ```typescript
 * declare const someElement: HTMLElement
 *
 * writeDataset('someKey') ('someValue') (someElement)
 * ```
 */
export declare function writeDataset(key: string): (value: string) => (element: HTMLElement) => void;

export as namespace LD;

export {};
