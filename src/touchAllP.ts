import { touchAll } from './touchAll'

/**
 * Takes an array of selectors. Returns a promise that will only resolve when for all selectors an element is found.
 * The promise value is an array of the elements in the order of the selector array. Optionally takes a scope as
 * third argument to use for the element search.
 *
 * This function is useful as an alternative for `touchAll` in async functions. When `await`ed  it'll block
 * all further execution of the function when not all elements are found.
 */
export function touchAllP<T1 extends Element, T2 extends Element>(selectors: [string, string], scope?: ParentNode): Promise<[T1, T2]>
export function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element>(selectors: [string, string, string], scope?: ParentNode): Promise<[T1, T2, T3]>
export function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element>(selectors: [string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4]>
export function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element>(selectors: [string, string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4, T5]>
export function touchAllP<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element>(selectors: [string, string, string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4, T5, T6]>
export function touchAllP(selectors: string[], scope: ParentNode = document.body) {
    return new Promise((resolve) => touchAll(selectors, (...elements) => resolve(elements), scope))
}
