import { ParseSelector } from 'typed-query-selector/parser'
import { queryOne } from './queryOne'

/**
 * The call signatures for functions returned from {@link queryOneWithin `queryOneWithin()`}.
 * Returns a matched element or `null`.
 */
export interface QueryOneWithinSelector {
    <S extends string>(selector: S): ParseSelector<S> | null
    <T extends Element>(selector: string): T | null
}

/**
 * Takes an element as scope for CSS selector queries. Returns a function that takes
 * selectors to query elements for within the set scope. The returned function finds
 * the first element matching given selector and returns it. Returns `null` if no
 * matching element exists.
 *
 * @example
 * ```typescript
 * declare const scope: HTMLElement
 * const queryFn = queryOneWithin(scope)
 *
 * // Automatically attempts to parse CSS selectors into an element type.
 * const headings = queryFn('h2.large-heading') // HTMLHeadingElement | null
 *
 * // defaults to Element for element types - other: Element | null
 * const other = queryFn('.other')
 *
 * // takes an explicit element type for other selectors - button: HTMLButtonElement | null
 * const button = queryFn<HTMLButtonElement>('.button')
 *
 * // You can call queryOneWithin in one go, and still provide type arguments:
 * const button2 = queryOneWithin(scope)<HTMLButtonElement>('.button')
 * ```
 */
export function queryOneWithin(scope: ParentNode): QueryOneWithinSelector {
    return (selector: string) => queryOne(selector, scope)
}
