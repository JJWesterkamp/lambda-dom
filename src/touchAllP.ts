import { touchAll } from './touchAll'

/**
 * Takes an array of selectors. Returns a promise that will only resolve when for all selectors an element is found.
 * The promise value is an array of the elements in the order of the selector array. Optionally takes a scope as
 * third argument to use for the element search.
 *
 * This function is useful as an alternative for `touchAll` in async functions. When `await`ed  it'll block
 * all further execution of the function when not all elements are found.
 *
 * Note: `touchAllP` has overloads for tuples of up to 6 selectors. When called with more selectors the returned
 * promise will contain a `T[]` where `T extends Element`.
 *
 * @example
 *
 * // Without explicit type arguments:
 * const elementsPA = touchAllP(['.my-button', '#the-form'])
 * // > Promise<[Element, Element]>
 *
 * // With explicit type arguments:
 * const elementsPB = touchAllP<HTMLButtonElement, HTMLFormElement>(['.my-button', '#the-form'])
 * // > Promise<[HTMLButtonElement, HTMLFormElement]>
 */
export function touchAllP<T1 extends Element>(selectors: [string], scope?: ParentNode): Promise<[T1]>
export function touchAllP<T1 extends Element, T2 extends Element>(selectors: [string, string], scope?: ParentNode): Promise<[T1, T2]>
export function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element>(selectors: [string, string, string], scope?: ParentNode): Promise<[T1, T2, T3]>
export function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element>(selectors: [string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4]>
export function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element>(selectors: [string, string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4, T5]>
export function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element>(selectors: [string, string, string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4, T5, T6]>
export function touchAllP<T extends Element>(selectors: string[], scope?: ParentNode): Promise<T[]>
export function touchAllP(selectors: string[], scope: ParentNode = document.body) {
    return new Promise((resolve) => touchAll(selectors, (...elements) => resolve(elements), scope))
}
