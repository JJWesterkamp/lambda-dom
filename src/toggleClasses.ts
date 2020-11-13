/**
 * Curried function that first takes a list of classes, then returns a new function that
 * takes the element on which to toggle those classes. The second function optionally takes
 * the second argument `force: boolean` to use on the native `DOMTokenList.toggle()` method.
 * Note that the value for `force` will be the same for all classes that are toggled.
 *
 * @example
 *
 * ```typescript
 * declare const someElement: Element
 * declare const elements: Element[]
 *
 * // You can either partially apply toggleClasses:
 * const toggleTwoClasses = toggleClasses('class-one', 'class-two')
 * elements.forEach(toggleTwoClasses)
 *
 * // Or execute toggleClasses in one go:
 * toggleClasses('class-one', 'class-two', '...') (someElement)
 * // Equivalently
 * toggleClasses('class-one', 'class-two', '...') (someElement, undefined)
 *
 * // This is like addClasses:
 * toggleClasses('class-one', 'class-two', '...') (someElement, true)
 *
 * // This is like removeClasses:
 * toggleClasses('class-one', 'class-two', '...') (someElement, false)
 * ```
 */
export function toggleClasses(...classes: string[]) {
    return function(element: Element, force?: boolean): void {
        classes.forEach((className) => element.classList.toggle(className, force))
    }
}
