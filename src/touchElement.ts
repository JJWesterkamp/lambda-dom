import { ParseSelector } from 'typed-query-selector/parser'

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
 * touchElement('#my-input', (input: HTMLElement) => { ... })s
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
export function touchElement<S extends string, U = any>(selector: S, callback: (element: ParseSelector<S>) => U, scope?: ParentNode): U | null
export function touchElement<T extends Element, U = any>(selector: string, callback: (element: T) => U, scope?: ParentNode): U | null
export function touchElement(selector: string, callback: (element: Element) => any, scope: ParentNode = document) {
    const element = scope.querySelector(selector)
    return element && callback(element)
}
