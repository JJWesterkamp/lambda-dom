import { hide } from './hide';
import { display } from './display'
import { CssDisplayValue, StylableElement } from './_types'

/**
 * Takes a `boolean` condition and a {@link CssDisplayValue CSS display value}, and returns a function
 * that takes elements. The returned function will set `style.display` onto given elements to either given
 * value or to `'none'` based on the given `cond` boolean.
 *
 * Note that the condition is constant for all future calls to the returned function.
 * See {@link displayUsing displayUsing()} for cases where the boolean condition should
 * be determined for each element individually.
 *
 * @example
 * ```typescript
 * declare const checkboxes: HTMLInputElement[]
 * declare const myCondition: boolean
 *
 * // Sets display: 'flex' to all checkboxes if myCondition is true
 * // Sets display: 'none' to all checkboxes otherwise
 * checkboxes.forEach(displayIf(myCondition, 'flex'))
 * ```
 *
 * @param cond         The condition for showing elements
 * @param displayValue The `style.display` value to use
 * @return {(element: T) => void}
 */
export function displayIf(cond: boolean, displayValue?: CssDisplayValue): (element: StylableElement) => void {
    return cond ? display(displayValue) : hide
}
