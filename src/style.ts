/**
 * @ignore
 */
const toPairs = (object: { [key: string]: any }) => Object.keys(object).map((key: string) => [key, object[key]])

/**
 * Takes an object of style attribute values, and returns a new function that takes an
 * element to apply those styles to.
 *
 * @param styles An object with inline styles to set.
 * @param element An element to apply the inline styles to.
 *
 * @example
 *
 * ```typescript
 * declare const someElement: HTMLElement
 * style({ color: 'red' }) (someElement)
 *
 * // Or partially apply to re-use the style set:
 * const warningButtonStyle = style({
 *     color: 'red',
 *     backgroundColor: 'white',
 *     border: '1px solid red',
 * })
 *
 * declare const elements: HTMLElement[]
 * elements.forEach(warningButtonStyle)
 * ```
 */
export function style(styles: Partial<CSSStyleDeclaration>): (element: HTMLElement) => void {
    return (element) => {
        for (const [key, val] of toPairs(styles)) {
            element.style[key] = val
        }
    }
}
