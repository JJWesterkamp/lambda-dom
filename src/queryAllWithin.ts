import { ParseSelector } from 'typed-query-selector/parser'
import { queryAll } from './queryAll'

/**
 * The call signatures for functions returned from {@link queryWithin `queryWithin()`}.
 */
export interface QueryAllWithinSelector {
    <S extends string>(selector: S): ParseSelector<S>[]
    <T extends Element>(selector: string): T[]
}

/**
 * Takes an element as scope for CSS selector queries. Returns a function that takes
 * selectors to query elements for within the given scope.
 *
 * @example
 * ```typescript
 * declare const scope: HTMLElement
 * const queryFn = queryAllWithin(scope)
 *
 * // Automatically attempts to parse CSS selectors into an element type.
 * const headings = queryFn('h2.large-heading, h3.medium-heading') // HTMLHeadingElement[]
 *
 * // defaults to Element for element types - others: Element[]
 * const others = queryFn('.other')
 *
 * // takes an explicit element type for other selectors - buttons: HTMLButtonElement[]
 * const buttons = queryFn<HTMLButtonElement>('.button')
 *
 * // You can call queryWithin in one go, and still provide type arguments:
 * const buttons2 = queryAllWithin(scope)<HTMLButtonElement>('.button')
 * ```
 */
export function queryAllWithin(scope: ParentNode): QueryAllWithinSelector {
    return (selector: string) => queryAll(selector, scope)
}
