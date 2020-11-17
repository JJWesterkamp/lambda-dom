import { addClasses } from './addClasses'
import { deferFrames } from './deferFrames'
import { removeClasses } from './removeClasses'

/**
 *
 */
export function addClassesForNFrames(n: number, ...classes: string[]): (element: Element) => void {
    return (element) => {
        addClasses(...classes)(element)
        deferFrames(n, () => removeClasses(...classes)(element))
    }
}
