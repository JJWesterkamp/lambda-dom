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
 * const button = await touchElementP<HTMLButtonElement>('#my-button')
 * ```
 */
export function touchElementP<S extends string>(selector: S, scope?: ParentNode): Promise<ParseSelector<S>>
export function touchElementP<T extends Element>(selector: string, scope?: ParentNode): Promise<T>
export function touchElementP(selector: string, scope: ParentNode = document) {
    return new Promise((resolve) => touchElement(selector, resolve, scope))
}
