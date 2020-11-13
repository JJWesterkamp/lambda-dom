import { addClasses } from './addClasses'
import { removeClasses } from './removeClasses'

/**
 *
 */
export function removeClassesForMS(ms: number, ...classes: string[]) {
    return (element: Element): void => {
        removeClasses(...classes)(element)
        setTimeout(() => addClasses(...classes)(element), ms)
    }
}