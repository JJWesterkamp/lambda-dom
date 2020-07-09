import { toggleClasses } from './toggleClasses'

/**
 * Curried function that first takes a list of classes, then returns a new function that
 * takes the element to remove those classes from.
 *
 * @example
 *
 * ```javascript
 * // You can either partially apply removeClasses:
 * const removeTwoClasses = removeClasses('class-one', 'class-two')
 * const elements = document.querySelectorAll('.some-element')
 * elements.forEach(removeTwoClasses)
 *
 * // Or execute removeClasses in one go:
 * const element = document.getElementById('some-element')
 * removeClasses('class-one', 'class-two', 'even-more-classes')(element)
 * ```
 */
export const removeClasses = (...classes: string[]) => (element: Element): void => {
    toggleClasses(...classes)(element, false)
}