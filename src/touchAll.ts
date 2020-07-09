/**
 * Takes an array of selectors and a callback function. When for all selectors an element is found, the callback
 * is called with each found element in order. Optionally takes a scope as third argument to use for the element search.
 */
export function touchAll<T1 extends Element, T2 extends Element, U>(selectors: [string, string], cb: (v1: T1, v2: T2) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, U>(selectors: [string, string, string], cb: (v1: T1, v2: T2, v3: T3) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, U>(selectors: [string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, U>(selectors: [string, string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => U, scope?: ParentNode): U | null
export function touchAll<T1 extends Element, T2 extends Element, T3 extends Element, T4 extends Element, T5 extends Element, T6 extends Element, U>(selectors: [string, string, string, string, string, string], cb: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => U, scope?: ParentNode): U | null
export function touchAll<T extends Element, U>(selectors: string[], cb: (...elements: T[]) => U, scope?: ParentNode): U | null
export function touchAll(selectors: string[], cb: Function, scope = document.body) {

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