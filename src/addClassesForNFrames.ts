import { addClasses } from './addClasses'
import { deferFrames } from './deferFrames'
import { removeClasses } from './removeClasses'
import { tap } from './_tools'

/**
 * Adds classes to an element for a given amount of animation frames.
 *
 * @param n The amount of animation frames to add the classes for.
 * @param classes Rest parameter for one or multiple classes to temporarily add.
 * @param element The element to add the classes to.
 *
 * @example
 *
 * ```typescript
 * declare const element: Element
 * addClassesForNFrames(10, 'class-a', 'class-b') (element)
 * ```
 */
export function addClassesForNFrames(n: number, ...classes: string[]): <T extends Element>(element: T) => T {
    return tap((element) => {
        addClasses(...classes)(element)
        deferFrames(n, () => removeClasses(...classes)(element))
    })
}
