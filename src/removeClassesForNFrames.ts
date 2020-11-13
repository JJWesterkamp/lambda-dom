import { addClasses } from './addClasses'
import { deferFrames } from './deferFrames'
import { removeClasses } from './removeClasses'

/**
 *
 */
export function removeClassesForNFrames(n: number, ...classes: string[]) {
    return (element: Element): void => {
        removeClasses(...classes)(element)
        deferFrames(n, () => addClasses(...classes)(element))
    }
}