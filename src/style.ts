import { toPairs } from './tools/toPairs'

/**
 * Takes an object of style attribute values, and returns a new function that takes an
 * element to apply those styles to.
 *
 * @example
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
export const style = (styles: Partial<CSSStyleDeclaration>) => (element: HTMLElement) => {
    for (const [key, val] of toPairs(styles)) {
        element.style[key] = val
    }
}
