import { toggleClasses } from './toggleClasses'

/**
 * Curried function that first takes a list of classes, then returns a new function that
 * takes the element to add those classes to.
 *
 * @example
 *
 * ```javascript
 * declare const elements: Element[]
 * declare const someElement: Element
 *
 * // You can either partially apply addClasses to re-use it:
 * const addTwoClasses = addClasses('class-one', 'class-two')
 *
 * elements.forEach(addTwoClasses)
 *
 * // Or execute addClasses in one go:
 * addClasses('class-one', 'class-two') (someElement)
 * ```
 */
export const addClasses = (...classes: string[]) => (element: Element): void => {
    toggleClasses(...classes)(element, true)
}
