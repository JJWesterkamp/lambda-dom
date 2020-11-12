/**
 * Calls `querySelectorAll` with given `selector` on given `scope`, or on `document` by default when the
 * scope is omitted. Returns an array containing the found elements.
 *
 * @example
 * ```typescript
 * // Recognizes keys of HTMLElementTagNameMap:
 * const anchors = queryAll('a') // HTMLAnchorElement[]
 *
 * // Recognizes keys of SVGElementTagNameMap:
 * const paths = queryAll('path') // SVGPathElement[]
 *
 * // Defaults to Element, or accepts an explicit type argument for the searched elements:
 * const elements = queryAll('.some-element') // Element[]
 * const buttons = queryAll<HTMLButtonElement>('.my-button') // HTMLButtonElement[]
 * ```
 */
export function queryAll<K extends keyof HTMLElementTagNameMap>(selector: K, scope?: ParentNode): HTMLElementTagNameMap[K][]
export function queryAll<K extends keyof SVGElementTagNameMap>(selector: K, scope?: ParentNode): SVGElementTagNameMap[K][]
export function queryAll<T extends Element>(selector: string, scope?: ParentNode): T[]
export function queryAll(selector: string, scope: ParentNode = document) {
    return Array.prototype.slice.call(scope.querySelectorAll(selector))
}
