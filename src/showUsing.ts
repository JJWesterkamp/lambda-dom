import { ifElse } from './_tools'
import { show } from './show'
import { hide } from './hide'
import { StylableElement } from './_types'

/**
 * Takes a predicate function for elements and returns a function that takes elements
 * to conditionally show depending on the result of applying the predicate function to given elements.
 *
 * **Note**
 *
 * This function assumes that given elements are shown by default - ie. there's no CSS rule that has
 * set the element's display to 'none'.
 *
 * @example
 * ```typescript
 * declare const checkboxes: HTMLInputElement[]
 * const isChecked = (input: HTMLInputElement) => input.checked
 *
 * // Unsets inline display of all checkboxes that are checked
 * // Sets display: 'none' to all other checkboxes.
 * checkboxes.forEach(showUsing(isChecked))
 *
 * // This is equivalent to following usage of showIf():
 * checkboxes.forEach((checkbox) => showIf(isChecked(checkbox))(checkbox))
 * ```
 *
 * @param {(element: T) => boolean} pred
 * @return {(element: T) => void}
 */
export function showUsing<T extends StylableElement>(pred: (element: T) => boolean): (element: T) => void {
    return ifElse(pred, show, hide)
}
