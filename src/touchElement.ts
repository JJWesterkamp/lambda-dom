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
 * // The callback's return value is returned from touchElement:
 * const inputValue: TheType = touchElement('#my-input', (input: HTMLInputElement): string => input.value)
 *
 * // and because the query for '#my-input' can fail:
 * type TheType = string | null
 * ```
 */
export function touchElement<T extends Element, U = any>(selector: string, callback: (element: T) => U, scope: ParentNode = document): U | null {
    const element = scope.querySelector<T>(selector)
    return element && callback(element)
}
