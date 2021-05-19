import { display } from './display'
import { hide } from './hide'
import { ifElse } from './_tools'
import { CssDisplayValue, StylableElement } from './_types'

/**
 * Takes a predicate function for elements and a {@link CssDisplayValue CSS display value}, and returns
 * a function that takes elements. The returned function will set `style.display` onto given elements to either
 * given value or to `'none'` based on the result of applying the predicate to those elements.
 *
 * @example
 * ```typescript
 * declare const checkboxes: HTMLInputElement[]
 * const isChecked = (checkbox: HTMLInputElement) => checkbox.checked
 *
 * // Sets display: 'flex' to all checkboxes that are checked
 * // Sets display: 'none' to all other checkboxes.
 * checkboxes.forEach(displayUsing(isChecked, 'flex'))
 *
 * // This is equivalent to following usage of displayIf():
 * checkboxes.forEach((checkbox) => displayIf(isChecked(checkbox), 'flex')(checkbox))
 * ```
 *
 * @param {(element: T) => boolean} pred
 * @param {string | null} displayValue
 * @return {(element: T) => void}
 */
export function displayUsing<T extends StylableElement>(pred: (element: T) => boolean, displayValue: CssDisplayValue): (element: T) => void {
    return ifElse(pred, display(displayValue), hide)
}
