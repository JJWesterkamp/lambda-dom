/**
 * Takes a string or `null`, and returns a function that takes elements. Sets `innerText` of
 * given elements to the given string, or to an empty string if given `null`.
 *
 * @example
 * ```typescript
 * // to set inner text
 * innerText('foo')(element)
 *
 * // to clear inner text
 * innerText(null)(element)
 *
 * // batch-clear contents:
 * declare const elements: HTMLElement[]
 * elements.forEach(innerText(null))
 * ```
 */
export function innerText(text: string | null): (element: HTMLElement) => void {
    return (element) => {
        element.innerText = text || ''
    }
}
