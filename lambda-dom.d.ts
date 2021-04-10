import { ParseSelector, ParseSelector as P } from 'typed-query-selector/parser';

/**
 * Autocomplete list for the most commonly used `style.display` values.
 * Includes the generic `string` type for compatibility and special syntax,
 * as well as `null | undefined` which are used by lambda-dom as a signal to unset inline
 * display values.
 */
export declare type CssDisplayValue = null | undefined | string | "block" | "contents" | "flex" | "grid" | "inherit" | "initial" | "inline" | "inline-block" | "inline-flex" | "inline-grid" | "inline-table" | "list-item" | "none" | "run-in" | "table" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group";
/**
 * Type alias for {@link https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle ElementCSSInlineStyle}
 * (objects with a style property of type
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration `CSSStyleDeclaration`},
 * most commonly elements)
 */
export declare type StylableElement = ElementCSSInlineStyle;
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
 * Takes a {@link CssDisplayValue CSS display value} and returns a function that takes
 * {@link StylableElement elements}. When applied to an element the returned function
 * assigns the given display value to the given element's `style.display` property.
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
export declare function display(value: CssDisplayValue): (element: StylableElement) => void;
/**
 * Takes a `boolean` condition and a {@link CssDisplayValue CSS display value}, and returns a function
 * that takes elements. The returned function will set `style.display` onto given elements to either given
 * value or to `'none'` based on the given `cond` boolean.
 *
 * Note that the condition is constant for all future calls to the returned function.
 * See {@link displayUsing displayUsing()} for cases where the boolean condition should
 * be determined for each element individually.
 *
 * @example
 * ```typescript
 * declare const checkboxes: HTMLInputElement[]
 * declare const myCondition: boolean
 *
 * // Sets display: 'flex' to all checkboxes if myCondition is true
 * // Sets display: 'none' to all checkboxes otherwise
 * checkboxes.foreach(displayIf(myCondition, 'flex'))
 * ```
 *
 * @param cond         The condition for showing elements
 * @param displayValue The `style.display` value to use
 * @return {(element: T) => void}
 */
export declare function displayIf(cond: boolean, displayValue?: CssDisplayValue): (element: StylableElement) => void;
/**
 * Takes a predicate function for elements and a {@link CssDisplayValue CSS display value}, and returns
 * a function that takes elements. The returned function will set `style.display` onto given elements to either
 * given value or to `'none'` based on the result of applying the predicate to those elements.
 *
 * @example
 * ```typescript
 * declare const checkboxes: HTMLInputElement[]
 * const isChecked = (checkbox: HTMLInputElement) => checkbox.checked
 *
 * // Sets display: 'flex' to all checkboxes that are checked
 * // Sets display: 'none' to all other checkboxes.
 * checkboxes.foreach(displayUsing(isChecked, 'flex'))
 *
 * // This is equivalent to following usage of displayIf():
 * checkboxes.foreach((checkbox) => displayIf(isChecked(checkbox), 'flex')(checkbox))
 * ```
 *
 * @param {(element: T) => boolean} pred
 * @param {string | null} displayValue
 * @return {(element: T) => void}
 */
export declare function displayUsing<T extends StylableElement>(pred: (element: T) => boolean, displayValue: CssDisplayValue): (element: T) => void;
/**
 * Returns a promise that resolves as soon as possible after the DOM content is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is `'interactive'` or `'complete'` at call-time, the returned promise resolves immediately, otherwise it resolves upon
 * the DOMContentLoaded event.
 *
 * @return {Promise<void>}
 */
export declare function DOMReadyP(): Promise<void>;
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
 * This is a specialisation of {@link display display()} that always sets display to `'none'`.
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
export declare function hide(element: StylableElement): void;
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
 * The call signatures for functions returned from {@link queryWithin `queryWithin()`}.
 */
export interface ScopedCssQueryFunction {
	<S extends string>(selector: S): ParseSelector<S>[];
	<T extends Element>(selector: string): T[];
}
/**
 * Takes an element as scope for CSS selector queries. Returns a function that takes
 * selectors to query elements for within the given scope.
 *
 * @example
 * ```typescript
 * declare const scope: HTMLElement
 * const queryFn = queryWithin(scope)
 *
 * // Automatically attempts to parse CSS selectors into an element type.
 * const headings = queryFn('h2.large-heading, h3.medium-heading') // HTMLHeadingElement[]
 *
 * // defaults to Element for element types - others: Element[]
 * const others = queryFn('.other')
 *
 * // takes an explicit element type for other selectors - buttons: HTMLButtonElement[]
 * const buttons = queryFn<HTMLButtonElement>('.button')
 *
 * // You can call queryWithin in one go, and still provide type arguments:
 * const buttons2 = queryWithin(scope)<HTMLButtonElement>('.button')
 * ```
 */
export declare function queryWithin(scope: ParentNode): ScopedCssQueryFunction;
/**
 * Calls `querySelectorAll` with given `selector` on given `scope`, or on `document` by default when the
 * scope is omitted. Returns an array containing the found elements. Attempts to parse the given CSS selector
 * to determine the element type.
 *
 * @param selector The selector to match elements against.
 * @param scope The scope of the element query. When omitted `queryAll` performs a global search.
 *
 * @example
 *
 * ```typescript
 * // Automatically attempts to parse CSS selectors into an element type.
 * const headings = queryAll('h2.large-heading, h3.medium-heading') // HTMLHeadingElement[]
 *
 * // Defaults to Element for unrecognised selectors:
 * const components = queryAll('custom-web-component')              // Element[]
 *
 * // Accepts an explicit type argument for the searched elements:
 * const components = queryAll<MyComponent>('custom-web-component') // MyComponent[]
 * ```
 */
export declare function queryAll<S extends string>(selector: S, scope?: ParentNode): ParseSelector<S>[];
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
export declare function readDataset(key: string): (element: HTMLOrSVGElement) => string | undefined;
/**
 * Read dataset values. Takes a dataset key and optionally a transformer for the corresponding value,
 * and returns a new function that takes the element to read the dataset key from.
 *
 * @param key The dataset key to read (camelCase, like the native dataset API).
 * @param transform The optional transformer function for dataset values.
 * @param element The element to read the dataset value from.
 *
 */
export declare function readDataset<T>(key: string, transform: (value: string) => T): (element: HTMLOrSVGElement) => T | undefined;
/**
 * Removes given element from the DOM if it's currently in it.
 * @param {Element} element
 */
export declare function remove(element: Element): void;
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
 * Shows the given element by unsetting any inline `style.display` value.
 * This is a specialisation of {@link display display()} that always unsets inline display.
 *
 * **Note**
 *
 * This function assumes that given elements are shown by default - ie. there's no CSS rule that has
 * set the element's display to 'none'.
 *
 * @example
 * ```typescript
 * declare const someElement: Element
 *
 * show(someElement)
 *
 * // This is equivalent to:
 * display(null) (someElement)
 * ```
 *
 * @param element The element to unset the inline display value for.
 */
export declare function show(element: StylableElement): void;
/**
 * Takes a `boolean` condition, and returns a function that takes elements. The returned function
 * will unset `style.display` onto a given element if the given condition is `true`. If the condition
 * is `false`, `style.display` is set to `'none'`.
 *
 * **Note**
 *
 * This function assumes that given elements are shown by default - ie. there's no CSS rule that has
 * set the element's display to 'none'.
 *
 * **Note**
 *
 * The condition is constant for all future calls to the returned function.
 * See {@link showUsing showUsing()} for cases where the boolean condition should
 * be determined for each element individually.
 *
 * @example
 * ```typescript
 * declare const checkboxes: HTMLInputElement[]
 * declare const myCondition: boolean
 *
 * // Unsets inline display to all checkboxes if myCondition is true
 * // Sets display: 'none' to all checkboxes otherwise
 * checkboxes.foreach(showIf(myCondition))
 * ```
 *
 * @param cond The condition for showing elements
 * @return {(element: HTMLElement) => void}
 */
export declare function showIf(cond: boolean): (element: StylableElement) => void;
/**
 * Takes a predicate function for elements and returns a function that takes elements
 * to conditionally show depending on the result of applying the predicate function to given elements.
 *
 * **Note**
 *
 * This function assumes that given elements are shown by default - ie. there's no CSS rule that has
 * set the element's display to 'none'.
 *
 * @example
 * ```typescript
 * declare const checkboxes: HTMLInputElement[]
 * const isChecked = (input: HTMLInputElement) => input.checked
 *
 * // Unsets inline display of all checkboxes that are checked
 * // Sets display: 'none' to all other checkboxes.
 * checkboxes.foreach(showUsing(isChecked))
 *
 * // This is equivalent to following usage of showIf():
 * checkboxes.foreach((checkbox) => showIf(isChecked(checkbox))(checkbox))
 * ```
 *
 * @param {(element: T) => boolean} pred
 * @return {(element: T) => void}
 */
export declare function showUsing<T extends StylableElement>(pred: (element: T) => boolean): (element: T) => void;
/**
 * Takes an object of style attribute values, and returns a new function that takes an
 * element to apply those styles to.
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
 *
 * @param styles An object with inline styles to set.
 * @param element An element to apply the inline styles to.
 */
export declare function style(styles: Partial<CSSStyleDeclaration>): (element: StylableElement) => void;
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
 * Takes an array of CSS-style element selectors and a callback function. When for all selectors an element is found,
 * the callback is called with each found element in order. Optionally takes a scope as third argument to use for the
 * element search.
 *
 * Note: `touchAll` has overloads for tuples of up to 8 selectors.
 *
 * @param selectors An array of CSS-style selectors. For each selector an element will be searched.
 * @param cb The callback to execute when all elements are found.
 * @param scope An optional scope for the element queries.
 *
 * @example
 *
 * ```typescript
 * // -------------------------------------------------------------------------
 * // Automatically attempts to parse CSS selectors into element types, which
 * // should work for tag-qualified CSS selectors
 * // -------------------------------------------------------------------------
 *
 * const resultA = touchAll([
 *     'button.my-button',
 *     '.article form#the-form',
 * ], (button, form) => {
 *     // button is HTMLButtonElement
 *     // form is HTMLFormElement
 * })
 *
 * // -------------------------------------------------------------------------
 * // When using non-recognised selectors all element types default to `Element`
 * // -------------------------------------------------------------------------
 *
 * const resultB = touchAll([
 *     '.my-button',
 *     '.article #the-form',
 * ], (button, form) => {
 *     // button is Element
 *     // form is Element
 * })
 *
 * // -------------------------------------------------------------------------
 * // When it fails to infer the element types from given CSS selectors you can
 * // specify the types explicitly
 * // -------------------------------------------------------------------------
 *
 * // Either let the callback specify the element types, this also works for
 * // referenced functions that satisfy the expected signature:
 *
 * const resultC = touchAll([
 *     '.my-button',
 *     '.article #the-form',
 * ], (button: HTMLButtonElement, form: HTMLFormElement) => {
 *     // ...
 * })
 *
 * // or provide the element types as type arguments list:
 *
 * const resultD = touchAll<HTMLButtonElement, HTMLFormElement>([
 *     '.my-button',
 *     '.article #the-form',
 * ], (button, form) => {
 *     // ...
 * })
 * ```
 */
export declare function touchAll<S1 extends string, U = any>(selectors: [
	S1
], cb: (v1: P<S1>) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, U = any>(selectors: [
	string
], cb: (v1: T1) => U, scope?: ParentNode): U | null;
export declare function touchAll<S1 extends string, S2 extends string, U = any>(selectors: [
	S1,
	S2
], cb: (v1: P<S1>, v2: P<S2>) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, U = any>(selectors: [
	string,
	string
], cb: (v1: T1, v2: T2) => U, scope?: ParentNode): U | null;
export declare function touchAll<S1 extends string, S2 extends string, S3 extends string, U = any>(selectors: [
	S1,
	S2,
	S3
], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, U = any>(selectors: [
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3) => U, scope?: ParentNode): U | null;
export declare function touchAll<S1 extends string, S2 extends string, S3 extends string, S4 extends string, U = any>(selectors: [
	S1,
	S2,
	S3,
	S4
], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>, v4: P<S4>) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, U = any>(selectors: [
	string,
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3, v4: T4) => U, scope?: ParentNode): U | null;
export declare function touchAll<S1 extends string, S2 extends string, S3 extends string, S4 extends string, S5 extends string, U = any>(selectors: [
	S1,
	S2,
	S3,
	S4,
	S5
], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>, v4: P<S4>, v5: P<S5>) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, U = any>(selectors: [
	string,
	string,
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, scope?: ParentNode): U | null;
export declare function touchAll<S1 extends string, S2 extends string, S3 extends string, S4 extends string, S5 extends string, S6 extends string, U = any>(selectors: [
	S1,
	S2,
	S3,
	S4,
	S5,
	S6
], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>, v4: P<S4>, v5: P<S5>, v6: P<S6>) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, U = any>(selectors: [
	string,
	string,
	string,
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, scope?: ParentNode): U | null;
export declare function touchAll<S1 extends string, S2 extends string, S3 extends string, S4 extends string, S5 extends string, S6 extends string, S7 extends string, U = any>(selectors: [
	S1,
	S2,
	S3,
	S4,
	S5,
	S6,
	S7
], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>, v4: P<S4>, v5: P<S5>, v6: P<S6>, v7: P<S7>) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, T7 extends Element, U = any>(selectors: [
	string,
	string,
	string,
	string,
	string,
	string,
	string
], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => U, scope?: ParentNode): U | null;
export declare function touchAll<S1 extends string, S2 extends string, S3 extends string, S4 extends string, S5 extends string, S6 extends string, S7 extends string, S8 extends string, U = any>(selectors: [
	S1,
	S2,
	S3,
	S4,
	S5,
	S6,
	S7,
	S8
], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>, v4: P<S4>, v5: P<S5>, v6: P<S6>, v7: P<S7>, v8: P<S8>) => U, scope?: ParentNode): U | null;
export declare function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, T7 extends Element, T8 extends Element, U = any>(selectors: [
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
 * Takes an array of CSS-style selectors. Returns a promise that will only resolve when for all selectors an element is found.
 * The promise value is an array of the elements in the order of the selector array. Optionally takes a scope as
 * third argument to use for the element search.
 *
 * Note: `touchAllP` has overloads for tuples of up to 8 selectors.
 *
 * Like {@linkcode touchAll} but 'portable', so that many callbacks can subscribe
 * to the 'event' of the elements being found.
 *
 * @param selectors An array of CSS-style selectors. For each selector an element will be searched.
 * @param scope An optional scope for the element queries.
 *
 * @example
 *
 * ```typescript
 * // -------------------------------------------------------------------------
 * // Automatically attempts to parse CSS selectors into element types, which
 * // should work for tag-qualified CSS selectors
 * // -------------------------------------------------------------------------
 *
 * const elementsPA = touchAllP(['button.my-button', 'form#the-form'])
 * // > Promise<[HTMLButtonElement, HTMLFormElement]>
 *
 * // -------------------------------------------------------------------------
 * // When using non-recognised selectors all element types default to `Element`
 * // -------------------------------------------------------------------------
 *
 * const elementsPB = touchAllP(['.my-button', '#the-form'])
 * // > Promise<[Element, Element]>
 *
 * // -------------------------------------------------------------------------
 * // When it fails to infer the element types from given CSS selectors you can
 * // specify the types explicitly
 * // -------------------------------------------------------------------------
 *
 * const elementsPB = touchAllP<HTMLButtonElement, HTMLFormElement>(['.my-button', '#the-form'])
 * // > Promise<[HTMLButtonElement, HTMLFormElement]>
 * ```
 */
export declare function touchAllP<S1 extends string>(selectors: [
	S1
], scope?: ParentNode): Promise<[
	P<S1>
]>;
export declare function touchAllP<T1 extends Element>(selectors: [
	string
], scope?: ParentNode): Promise<[
	T1
]>;
export declare function touchAllP<S1 extends string, S2 extends string>(selectors: [
	S1,
	S2
], scope?: ParentNode): Promise<[
	P<S1>,
	P<S2>
]>;
export declare function touchAllP<T1 extends Element, T2 extends Element>(selectors: [
	string,
	string
], scope?: ParentNode): Promise<[
	T1,
	T2
]>;
export declare function touchAllP<S1 extends string, S2 extends string, S3 extends string>(selectors: [
	S1,
	S2,
	S3
], scope?: ParentNode): Promise<[
	P<S1>,
	P<S2>,
	P<S3>
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
export declare function touchAllP<S1 extends string, S2 extends string, S3 extends string, S4 extends string>(selectors: [
	S1,
	S2,
	S3,
	S4
], scope?: ParentNode): Promise<[
	P<S1>,
	P<S2>,
	P<S3>,
	P<S4>
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
export declare function touchAllP<S1 extends string, S2 extends string, S3 extends string, S4 extends string, S5 extends string>(selectors: [
	S1,
	S2,
	S3,
	S4,
	S5
], scope?: ParentNode): Promise<[
	P<S1>,
	P<S2>,
	P<S3>,
	P<S4>,
	P<S5>
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
export declare function touchAllP<S1 extends string, S2 extends string, S3 extends string, S4 extends string, S5 extends string, S6 extends string>(selectors: [
	S1,
	S2,
	S3,
	S4,
	S5,
	S6
], scope?: ParentNode): Promise<[
	P<S1>,
	P<S2>,
	P<S3>,
	P<S4>,
	P<S5>,
	P<S6>
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
export declare function touchAllP<S1 extends string, S2 extends string, S3 extends string, S4 extends string, S5 extends string, S6 extends string, S7 extends string>(selectors: [
	S1,
	S2,
	S3,
	S4,
	S5,
	S6,
	S7
], scope?: ParentNode): Promise<[
	P<S1>,
	P<S2>,
	P<S3>,
	P<S4>,
	P<S5>,
	P<S6>,
	P<S7>
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
export declare function touchAllP<S1 extends string, S2 extends string, S3 extends string, S4 extends string, S5 extends string, S6 extends string, S7 extends string, S8 extends string>(selectors: [
	S1,
	S2,
	S3,
	S4,
	S5,
	S6,
	S7,
	S8
], scope?: ParentNode): Promise<[
	P<S1>,
	P<S2>,
	P<S3>,
	P<S4>,
	P<S5>,
	P<S6>,
	P<S7>,
	P<S8>
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
 * // -------------------------------------------------------------------------
 * // Automatically attempts to parse CSS selectors into element types, which
 * // should work for tag-qualified CSS selectors
 * // -------------------------------------------------------------------------
 *
 * touchElement('input#my-input', (input) => {
 *     // input is HTMLInputElement
 * })
 *
 * // -------------------------------------------------------------------------
 * // When using non-recognised selectors the element type defaults to `Element`
 * // -------------------------------------------------------------------------
 *
 * touchElement('#my-input', (input) => {
 *     // input is Element
 * })
 *
 * // -------------------------------------------------------------------------
 * // When it fails to infer the element types from given CSS selector you can
 * // specify the type explicitly
 * // -------------------------------------------------------------------------
 *
 * // Either let the callback specify the element types:
 * touchElement('#my-input', (input: HTMLElement) => { ... })
 *
 * // or provide the element type as type argument:
 * touchElement<HTMLElement>('#my-input', (input) => { ... })
 *
 * // -------------------------------------------------------------------------
 * // The callback's return value is returned from touchElement:
 * // -------------------------------------------------------------------------
 *
 * const result: TheType = touchElement('input#my-input', (input) => input.value)
 *
 * // and because the query for 'input#my-input' can fail to find an element:
 * type TheType = string | null
 * ```
 */
export declare function touchElement<S extends string, U = any>(selector: S, callback: (element: ParseSelector<S>) => U, scope?: ParentNode): U | null;
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
 * // -------------------------------------------------------------------------
 * // Automatically attempts to parse CSS selectors into element types, which
 * // should work for tag-qualified CSS selectors
 * // -------------------------------------------------------------------------
 *
 * touchElementP('form.my-form button#my-button')
 * // Promise<HTMLButtonElement>
 *
 * // -------------------------------------------------------------------------
 * // When using non-recognised selectors the element type defaults to `Element`
 * // -------------------------------------------------------------------------
 *
 * touchElementP<HTMLButtonElement>('#my-button')
 * // Promise<Element>
 *
 * // -------------------------------------------------------------------------
 * // When it fails to infer the element types from given CSS selector you can
 * // specify the type explicitly
 * // -------------------------------------------------------------------------
 *
 * touchElementP<HTMLButtonElement>('#my-button')
 * // Promise<HTMLButtonElement>
 * ```
 */
export declare function touchElementP<S extends string>(selector: S, scope?: ParentNode): Promise<ParseSelector<S>>;
export declare function touchElementP<T extends Element>(selector: string, scope?: ParentNode): Promise<T>;
/**
 * Returns a promise that resolves as soon as possible after the window is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is `'complete'` at call-time, the returned promise resolves immediately, otherwise it resolves upon
 * the window load event.
 *
 * @return {Promise<void>}
 */
export declare function windowLoadP(): Promise<void>;
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
export declare function writeDataset(key: string): (value: string) => (element: HTMLOrSVGElement) => void;

export as namespace LD;

export {};
