import { addClasses } from './addClasses'
import { deferFrames } from './deferFrames'
import { removeClasses } from './removeClasses'

/**
 *
 */
export function removeClassesForNFrames(n: number, ...classes: string[]): (element: Element) => void {
    return (element) => {
        removeClasses(...classes)(element)
        deferFrames(n, () => addClasses(...classes)(element))
    }
}