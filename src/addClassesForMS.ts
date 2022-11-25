import { addClasses } from './addClasses'
import { removeClasses } from './removeClasses'
import { tap } from './_tools'

/**
 * Adds classes to an element for a given amount of milliseconds.
 *
 * @param ms The amount of milliseconds to add the classes for
 * @param classes Rest parameter for one or multiple classes to temporarily add
 * @param element The element to add the classes to
 *
 * @example
 *
 * ```typescript
 * declare const element: Element
 * addClassesForMS(500, 'class-a', 'class-b') (element)
 * ```
 */
export function addClassesForMS(ms: number, ...classes: string[]): <T extends Element>(element: T) => T {
    return tap((element) => {
        addClasses(...classes)(element)
        setTimeout(() => removeClasses(...classes)(element), ms)
    })
}
