import { ParseSelector } from 'typed-query-selector/parser'

/**
 * Calls `querySelectorAll` with given `selector` on given `scope`, or on `document` by default when the
 * scope is omitted. Returns an array containing the found elements. Attempts to parse the given CSS selector
 * to determine the element type.
 *
 * @param selector The selector to match elements against.
 * @param scope The scope of the element query. When omitted `queryAll` performs a global search.
 *
 * @example
 *
 * ```typescript
 * // Automatically attempts to parse CSS selectors into an element type.
 * const headings = queryAll('h2.large-heading, h3.medium-heading') // HTMLHeadingElement[]
 *
 * // Defaults to Element for unrecognised selectors:
 * const components = queryAll('custom-web-component')              // Element[]
 *
 * // Accepts an explicit type argument for the searched elements:
 * const components = queryAll<MyComponent>('custom-web-component') // MyComponent[]
 * ```
 */
export function queryAll<S extends string>(selector: S, scope?: ParentNode): ParseSelector<S>[]
export function queryAll<T extends Element>(selector: string, scope?: ParentNode): T[]
export function queryAll(selector: string, scope: ParentNode = document) {
    return Array.prototype.slice.call(scope.querySelectorAll(selector))
}
