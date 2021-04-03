import { show } from './show';
import { hide } from './hide';

/**
 * Shows given element if `cond` is truthy. Otherwise given element is being hidden.
 * Uses {@link show show()} and {@link hide hide()} under the hood.
 *
 * @param cond         The condition for showing given element
 * @param element      The element to conditionally display
 */
export function showIf(cond: boolean): (element: HTMLElement) => void {
    return cond ? show : hide
}
