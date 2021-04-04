import { CssDisplayValue, StylableElement } from './_types'

/**
 * Takes a {@link CssDisplayValue CSS display value} and returns a function that takes
 * {@link StylableElement elements}. When applied to an element the returned function
 * assigns the given display value to the given element's `style.display` property.
 *
 * @param value The display CSS value to use. When `null` any inline display value is removed.
 * @param element The target element to set the display value on.
 *
 * @example
 * ```typescript
 * declare const someElement: Element
 *
 * // This will unset any inline style for `display` and let CSS take over control
 * display(null) (someElement)
 *
 * // This will explicitly set the display property to 'flex'
 * display('flex') (someElement)
 *
 * // and this will hide the element
 * display('none') (someElement)
 *
 * // You can store the display strategies in advance:
 * const hideFn = display('none')
 * const showFn = display('grid')
 *
 * // And then use them on any element conditionally:
 * declare const shouldShow: boolean
 * (shouldShow ? showFn : hideFn) (someElement)
 * ```
 */
export function display(value: CssDisplayValue): (element: StylableElement) => void {
    return (element) => {
        element.style.display = value || ''
    }
}
