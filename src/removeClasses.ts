import { toggleClasses } from './toggleClasses'

/**
 * Curried function that first takes a list of classes, then returns a new function that
 * takes the element to remove those classes from.
 *
 * @param classes Rest parameter for one or multiple classes to remove.
 * @param element The element to remove the classes from.
 *
 * @example
 *
 * ```typescript
 * declare const someElement: Element
 * declare const elements: Element[]
 *
 * // You can either partially apply removeClasses:
 * const removeTwoClasses = removeClasses('class-one', 'class-two')
 * elements.forEach(removeTwoClasses)
 *
 * // Or execute removeClasses in one go:
 * removeClasses('class-one', 'class-two', 'even-more-classes')(element)
 * ```
 */
export function removeClasses(...classes: string[]): <T extends Element>(element: T) => T {
    return (element) => toggleClasses(...classes)(element, false)
}
