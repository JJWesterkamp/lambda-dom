import { ParseSelector } from 'typed-query-selector/parser'
import { queryAll } from './queryAll'

/**
 * The call signatures for functions returned from {@link queryWithin `queryWithin()`}.
 */
export interface ScopedCssQueryFunction {
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
 * const queryFn = queryWithin(scope)
 *
 * // Recognizes keys of HTMLElementTagNameMap - links: HTMLAnchorElement[]
 * const links = queryFn('a')
 *
 * // Recognizes keys of SVGElementTagNameMap - paths: SVGPathElement[]
 * const paths = queryFn('path')
 *
 * // takes an explicit element type for other selectors - buttons: HTMLButtonElement[]
 * const buttons = queryFn<HTMLButtonElement>('.button')
 *
 * // defaults to Element for element types - others: Element[]
 * const others = queryFn('.other')
 *
 * // You can call queryWithin in one go, and still provide type arguments:
 * const buttons2 = queryWithin(scope)<HTMLButtonElement>('.button')
 * ```
 */
export function queryWithin(scope: ParentNode): ScopedCssQueryFunction {
    return (selector: string) => queryAll(selector, scope)
}
