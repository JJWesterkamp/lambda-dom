import { show } from './show';
import { hide } from './hide';
import { StylableElement } from './_types'

/**
 * Takes a `boolean` condition, and returns a function that takes elements. The returned function
 * will unset `style.display` onto a given element if the given condition is `true`. If the condition
 * is `false`, `style.display` is set to `'none'`.
 *
 * **Note**
 *
 * This function assumes that given elements are shown by default - ie. there's no CSS rule that has
 * set the element's display to 'none'.
 *
 * **Note**
 *
 * The condition is constant for all future calls to the returned function.
 * See {@link showUsing showUsing()} for cases where the boolean condition should
 * be determined for each element individually.
 *
 * @example
 * ```typescript
 * declare const checkboxes: HTMLInputElement[]
 * declare const myCondition: boolean
 *
 * // Unsets inline display to all checkboxes if myCondition is true
 * // Sets display: 'none' to all checkboxes otherwise
 * checkboxes.foreach(showIf(myCondition))
 * ```
 *
 * @param cond The condition for showing elements
 * @return {(element: HTMLElement) => void}
 */
export function showIf(cond: boolean): (element: StylableElement) => void {
    return cond ? show : hide
}
