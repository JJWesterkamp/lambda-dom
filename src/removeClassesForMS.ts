import { addClasses } from './addClasses'
import { removeClasses } from './removeClasses'
import { tap } from './_tools'

/**
 * Removes classes from an element for a given amount of milliseconds.
 *
 * @param ms The amount of milliseconds to remove the classes for.
 * @param classes Rest parameter for one or multiple classes to remove.
 * @param element The element to remove the classes from.
 *
 * @example
 * ```typescript
 * declare const element: Element
 * removeClassesForMS(500, 'class-a', 'class-b') (element)
 * ```
 */
export function removeClassesForMS(ms: number, ...classes: string[]): <T extends Element>(element: T) => T {
    return tap((element) => {
        removeClasses(...classes)(element)
        window.setTimeout(() => addClasses(...classes)(element), ms)
    })
}
