import { tap } from './_tools'

/**
 * Takes an HTML string or `null`, and returns a function that takes `Element` objects. Sets `innerHTML` of
 * given elements to the given string, or to an empty string if given `null`.
 *
 * @example
 * ```typescript
 * // to set inner HTML
 * innerHTML('<span>foo</span>')(element)
 *
 * // to clear inner HTML
 * innerHTML(null)(element)
 *
 * // batch-clear contents:
 * declare const elements: Element[]
 * elements.forEach(innerHTML(null))
 * ```
 */
export function innerHTML(html: string | null): <T extends Element>(element: T) => T {
    return tap((element) => {
        element.innerHTML = html ?? ''
    })
}
