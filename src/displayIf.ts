import { hide } from './hide';
import { display } from './display'

/**
 * Sets the `style.display` value to `displayValue` on given element if `cond` is truthy.
 * Otherwise given element is being hidden. Uses {@link display display()} and {@link hide hide()}
 * under the hood.
 *
 * @param cond         The condition for showing given element
 * @param displayValue The `style.display` value to use. Also accepts (and defaults to) `null` for flexibility.
 *                     See {@link showIf showIf()} for situations where `displayValue` should always be `null`.
 * @param element      The element to conditionally display
 */
export function displayIf(cond: boolean, displayValue: string | null = null): (element: HTMLElement) => void {
    return cond ? display(displayValue) : hide
}
