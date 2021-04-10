import { ParseSelector } from 'typed-query-selector/parser'

/**
 * Calls `querySelector` with given `selector` on given `scope`, or on `document` by default when the
 * scope is omitted. Returns the first element matching given selector if any exists, or `null` otherwise.
 * Attempts to parse the given CSS selector to determine the element type.
 *
 * @param selector The selector to match elements against.
 * @param scope The scope of the element query. When omitted `queryOne` performs a global search.
 *
 * @example
 *
 * ```typescript
 * // Automatically attempts to parse CSS selectors into an element type.
 * const heading = queryOne('h2.large-heading, h3.medium-heading') // HTMLHeadingElement | null
 *
 * // Defaults to Element for unrecognised selectors:
 * const component = queryOne('custom-web-component')              // Element | null
 *
 * // Accepts an explicit type argument for the searched elements:
 * const component = queryOne<MyComponent>('custom-web-component') // MyComponent | null
 * ```
 */
export function queryOne<S extends string>(selector: S, scope?: ParentNode): ParseSelector<S> | null
export function queryOne<T extends Element>(selector: string, scope?: ParentNode): T | null
export function queryOne(selector: string, scope: ParentNode = document) {
    return scope.querySelector(selector)
}

queryOne('form')