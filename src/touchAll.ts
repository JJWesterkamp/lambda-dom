/**
 * Takes an array of selectors and a callback function. When for all selectors an element is found, the callback
 * is called with each found element in order. Optionally takes a scope as third argument to use for the element search.
 *
 * Note: `touchAll` has overloads for tuples of up to 8 selectors.
 *
 * @example
 *
 * declare function doSomething(button: HTMLButtonElement, form: HTMLFormElement): string
 *
 * // Either specify the element types in the callback
 * const resultA: TheType = touchAll([
 *     '.my-button',
 *     '#the-form',
 * ], (
 *     button: HTMLButtonElement,
 *     form: HTMLFormElement,
 * ) => doSomething(button, form))
 *
 * // or provide them as type arguments list, in which case the return type for `touchAll` itself is required:
 * const resultB: TheType = touchAll<HTMLButtonElement, HTMLFormElement, string>([
 *     '.my-button',
 *     '#the-form',
 * ], (
 *     button,
 *     form,
 * ) => doSomething(button, form))
 *
 * // and because the queries can fail:
 * type TheType = null | string
 */
export function touchAll<T1 extends Element, U>(selectors: [string], cb: (v1: T1) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, U>(selectors: [string, string], cb: (v1: T1, v2: T2) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, U>(selectors: [string, string, string], cb: (v1: T1, v2: T2, v3: T3) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, U>(selectors: [string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, U>(selectors: [string, string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, U>(selectors: [string, string, string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, T7 extends Element, U>(selectors: [string, string, string, string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, T7 extends Element, T8 extends Element, U>(selectors: [string, string, string, string, string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => U, scope?: ParentNode): U | null
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
