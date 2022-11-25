import { StylableElement } from './_types'

/**
 * Takes an object of style attribute values, and returns a new function that takes an
 * element to apply those styles to.
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
 *
 * @param styles An object with inline styles to set.
 * @param element An element to apply the inline styles to.
 */
export function style(styles: Partial<CSSStyleDeclaration>): <T extends StylableElement>(element: T) => T {
    return (element) => {
        Object.assign(element.style, styles)
        return element
    }
}
