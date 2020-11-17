import { toggleClasses } from './toggleClasses'

/**
 * Curried function that first takes a list of classes, then returns a new function that
 * takes the element to remove those classes from.
 *
 * @example
 *
 * declare const someElement: Element
 * declare const elements: Element[]
 *
 * // You can either partially apply removeClasses:
 * const removeTwoClasses = removeClasses('class-one', 'class-two')
 * elements.forEach(removeTwoClasses)
 *
 * // Or execute removeClasses in one go:
 * removeClasses('class-one', 'class-two', 'even-more-classes')(element)
 */
export function removeClasses(...classes: string[]): (element: Element) => void {
    return (element) => toggleClasses(...classes)(element, false)
}