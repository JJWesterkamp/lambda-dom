import { display } from './display'
import { StylableElement } from './_types'

/**
 * Hide the given element through the style.display property.
 * This is a specialisation of {@link display display()} that always sets display to `'none'`.
 *
 * @param element The element to hide.
 * @example
 *
 * ```typescript
 * declare const someElement: Element
 *
 * // Hides the given element
 * hide(someElement)
 *
 * // This is equivalent to:
 * display('none') (someElement)
 * ```
 */
export function hide(element: StylableElement): void {
    display('none')(element)
}
