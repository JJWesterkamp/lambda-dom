import { display } from './display'
import { StylableElement } from './_types'

/**
 * Shows the given element by unsetting any inline `style.display` value.
 * This is a specialisation of {@link display display()} that always unsets inline display.
 *
 * **Note**
 *
 * This function assumes that given elements are shown by default - ie. there's no CSS rule that has
 * set the element's display to 'none'.
 *
 * @example
 * ```typescript
 * declare const someElement: Element
 *
 * show(someElement)
 *
 * // This is equivalent to:
 * display(null) (someElement)
 * ```
 *
 * @param element The element to unset the inline display value for.
 */
export function show(element: StylableElement): void {
    display(null)(element)
}
