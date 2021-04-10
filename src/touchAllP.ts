import { touchElementP } from './touchElementP'
import { ParseSelector as P } from 'typed-query-selector/parser'



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
export function touchAllP<
    S1 extends string
>(selectors: [S1], scope?: ParentNode): Promise<[P<S1>]>
export function touchAllP<
    T1 extends Element
>(selectors: [string], scope?: ParentNode): Promise<[T1]>
export function touchAllP<
    S1 extends string,
    S2 extends string
>(selectors: [S1, S2], scope?: ParentNode): Promise<[P<S1>, P<S2>]>
export function touchAllP<
    T1 extends Element,
    T2 extends Element
>(selectors: [string, string], scope?: ParentNode): Promise<[T1, T2]>
export function touchAllP<
    S1 extends string,
    S2 extends string,
    S3 extends string
>(selectors: [S1, S2, S3], scope?: ParentNode): Promise<[P<S1>, P<S2>, P<S3>]>
export function touchAllP<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element
>(selectors: [string, string, string], scope?: ParentNode): Promise<[T1, T2, T3]>
export function touchAllP<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    S4 extends string
>(selectors: [S1, S2, S3, S4], scope?: ParentNode): Promise<[P<S1>, P<S2>, P<S3>, P<S4>]>
export function touchAllP<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    T4 extends Element
>(selectors: [string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4]>
export function touchAllP<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    S4 extends string,
    S5 extends string
>(selectors: [S1, S2, S3, S4, S5], scope?: ParentNode): Promise<[P<S1>, P<S2>, P<S3>, P<S4>, P<S5>]>
export function touchAllP<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    T4 extends Element,
    T5 extends Element
>(selectors: [string, string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4, T5]>
export function touchAllP<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    S4 extends string,
    S5 extends string,
    S6 extends string
>(selectors: [S1, S2, S3, S4, S5, S6], scope?: ParentNode): Promise<[P<S1>, P<S2>, P<S3>, P<S4>, P<S5>, P<S6>]>
export function touchAllP<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    T4 extends Element,
    T5 extends Element,
    T6 extends Element
>(selectors: [string, string, string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4, T5, T6]>
export function touchAllP<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    S4 extends string,
    S5 extends string,
    S6 extends string,
    S7 extends string
>(selectors: [S1, S2, S3, S4, S5, S6, S7], scope?: ParentNode): Promise<[P<S1>, P<S2>, P<S3>, P<S4>, P<S5>, P<S6>, P<S7>]>
export function touchAllP<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    T4 extends Element,
    T5 extends Element,
    T6 extends Element,
    T7 extends Element
>(selectors: [string, string, string, string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4, T5, T6, T7]>
export function touchAllP<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    S4 extends string,
    S5 extends string,
    S6 extends string,
    S7 extends string,
    S8 extends string
>(selectors: [S1, S2, S3, S4, S5, S6, S7, S8], scope?: ParentNode): Promise<[P<S1>, P<S2>, P<S3>, P<S4>, P<S5>, P<S6>, P<S7>, P<S8>]>
export function touchAllP<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    T4 extends Element,
    T5 extends Element,
    T6 extends Element,
    T7 extends Element,
    T8 extends Element
>(selectors: [string, string, string, string, string, string, string, string], scope?: ParentNode): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>
export function touchAllP(selectors: string[], scope: ParentNode = document) {
    return Promise.all(
        selectors.map((selector) => touchElementP(selector, scope))
    )
}
