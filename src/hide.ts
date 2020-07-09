import { display } from './display'

/**
 * Hide the given element through the style.display property.
 * @example
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
export const hide = display('none')