import { display } from './display'

/**
 * Shows the given element by unsetting any inline `style.display` value, assuming no
 * `display: none` rule is set in CSS.
 *
 * @param element The element to unset the inline display value for.
 *
 * @example
 * ```typescript
 * declare const someElement: Element
 *
 * // Shows (or unhides) the given element, if it has no display: none set in CSS
 * show(someElement)
 *
 * // This is equivalent to:
 * display(null) (someElement)
 * ```
 */
export function show(element: HTMLElement): void {
    display(null)(element)
}