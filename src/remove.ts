/**
 * Removes given element from the DOM if it's currently in it.
 * @param {Element} element
 */
export function remove(element: Element): void {
    element.parentNode?.removeChild(element)
}
