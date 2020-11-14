/**
 * Shows given element through the style.display property. Optionally takes a second
 * argument denoting the value for style.display. A `null` value will unset any inline
 * attibute for `display` to give back display control to the CSS stylesheet declarations.
 *
 * @example
 *
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
 */
export function display(value: string | null) {
    return (element: HTMLElement): void => {
        element.style.display = value || ''
    }
}