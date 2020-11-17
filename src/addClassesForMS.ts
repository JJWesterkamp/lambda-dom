import { addClasses } from './addClasses'
import { removeClasses } from './removeClasses'

/**
 *
 */
export function addClassesForMS(ms: number, ...classes: string[]): (element: Element) => void {
    return (element) => {
        addClasses(...classes)(element)
        setTimeout(() => removeClasses(...classes)(element), ms)
    }
}