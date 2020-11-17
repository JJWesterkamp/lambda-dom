import { addClasses } from './addClasses'
import { removeClasses } from './removeClasses'

/**
 *
 */
export function removeClassesForMS(ms: number, ...classes: string[]): (element: Element) => void {
    return (element) => {
        removeClasses(...classes)(element)
        setTimeout(() => addClasses(...classes)(element), ms)
    }
}