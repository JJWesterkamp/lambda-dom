import { toggleClasses } from './toggleClasses'

/**
 * Curried function that first takes a list of classes, then returns a new function that
 * takes the element to add those classes to.
 *
 * @param classes Rest parameter for one or multiple classes to add.
 * @param element The element to add the classes to.
 *
 * @example
 * ```typescript
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
export function addClasses(...classes: string[]): (element: Element) => void {
    return (element) => toggleClasses(...classes)(element, true)
}
