import { ParseSelector as P } from 'typed-query-selector/parser'

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
export function touchAll<
    S1 extends string,
    U = any
>(selectors: [S1], cb: (v1: P<S1>) => U, scope?: ParentNode): U | null
export function touchAll<
    T1 extends Element,
    U = any
>(selectors: [string], cb: (v1: T1) => U, scope?: ParentNode): U | null
export function touchAll<
    S1 extends string,
    S2 extends string,
    U = any
>(selectors: [S1, S2], cb: (v1: P<S1>, v2: P<S2>) => U, scope?: ParentNode): U | null
export function touchAll<
    T1 extends Element,
    T2 extends Element,
    U = any
>(selectors: [string, string], cb: (v1: T1, v2: T2) => U, scope?: ParentNode): U | null
export function touchAll<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    U = any
>(selectors: [S1, S2, S3], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>) => U, scope?: ParentNode): U | null
export function touchAll<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    U = any
>(selectors: [string, string, string], cb: (v1: T1, v2: T2, v3: T3) => U, scope?: ParentNode): U | null
export function touchAll<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    S4 extends string,
    U = any
>(selectors: [S1, S2, S3, S4], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>, v4: P<S4>) => U, scope?: ParentNode): U | null
export function touchAll<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    T4 extends Element,
    U = any
>(selectors: [string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4) => U, scope?: ParentNode): U | null
export function touchAll<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    S4 extends string,
    S5 extends string,
    U = any
>(selectors: [S1, S2, S3, S4, S5], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>, v4: P<S4>, v5: P<S5>) => U, scope?: ParentNode): U | null
export function touchAll<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    T4 extends Element,
    T5 extends Element,
    U = any
>(selectors: [string, string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, scope?: ParentNode): U | null
export function touchAll<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    S4 extends string,
    S5 extends string,
    S6 extends string,
    U = any
>(selectors: [S1, S2, S3, S4, S5, S6], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>, v4: P<S4>, v5: P<S5>, v6: P<S6>) => U, scope?: ParentNode): U | null
export function touchAll<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    T4 extends Element,
    T5 extends Element,
    T6 extends Element,
    U = any
>(selectors: [string, string, string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, scope?: ParentNode): U | null
export function touchAll<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    S4 extends string,
    S5 extends string,
    S6 extends string,
    S7 extends string,
    U = any
>(selectors: [S1, S2, S3, S4, S5, S6, S7], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>, v4: P<S4>, v5: P<S5>, v6: P<S6>, v7: P<S7>) => U, scope?: ParentNode): U | null
export function touchAll<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    T4 extends Element,
    T5 extends Element,
    T6 extends Element,
    T7 extends Element,
    U = any
>(selectors: [string, string, string, string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => U, scope?: ParentNode): U | null
export function touchAll<
    S1 extends string,
    S2 extends string,
    S3 extends string,
    S4 extends string,
    S5 extends string,
    S6 extends string,
    S7 extends string,
    S8 extends string,
    U = any
>(selectors: [S1, S2, S3, S4, S5, S6, S7, S8], cb: (v1: P<S1>, v2: P<S2>, v3: P<S3>, v4: P<S4>, v5: P<S5>, v6: P<S6>, v7: P<S7>, v8: P<S8>) => U, scope?: ParentNode): U | null
export function touchAll<
    T1 extends Element,
    T2 extends Element,
    T3 extends Element,
    T4 extends Element,
    T5 extends Element,
    T6 extends Element,
    T7 extends Element,
    T8 extends Element,
    U = any
>(selectors: [string, string, string, string, string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => U, scope?: ParentNode): U | null
export function touchAll(selectors: string[], cb: Function, scope: ParentNode = document) {
    const elements: Element[] = []

    for (const selector of selectors) {
        const el = scope.querySelector(selector)

        if (el === null) {
            return null
        }

        elements.push(el)
    }

    return cb(...elements)
}
