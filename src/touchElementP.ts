import { ParseSelector } from 'typed-query-selector/parser'
import { touchElement } from './touchElement'

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
export function touchElementP<S extends string>(selector: S, scope?: ParentNode): Promise<ParseSelector<S>>
export function touchElementP<T extends Element>(selector: string, scope?: ParentNode): Promise<T>
export function touchElementP(selector: string, scope: ParentNode = document) {
    return new Promise((resolve) => touchElement(selector, resolve, scope))
}
