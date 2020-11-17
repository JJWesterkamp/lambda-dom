import { addClasses } from './addClasses'
import { deferFrames } from './deferFrames'
import { removeClasses } from './removeClasses'

/**
 * Removes classes from an element for a given amount of animation frames.
 *
 * @param n The amount of animation frames to remove the classes for.
 * @param classes Rest parameter for one or multiple classes to temporarily remove.
 * @param element The element to remove the classes from.
 *
 * @example
 *
 * ```typescript
 * declare const element: Element
 * removeClassesForNFrames(10, 'class-a', 'class-b') (element)
 * ```
 */
export function removeClassesForNFrames(n: number, ...classes: string[]): (element: Element) => void {
    return (element) => {
        removeClasses(...classes)(element)
        deferFrames(n, () => addClasses(...classes)(element))
    }
}