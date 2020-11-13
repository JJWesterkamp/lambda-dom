import { addClasses } from './addClasses'
import { removeClasses } from './removeClasses'

/**
 *
 */
export function addClassesForMS(ms: number, ...classes: string[]) {
    return (element: Element): void => {
        addClasses(...classes)(element)
        setTimeout(() => removeClasses(...classes)(element), ms)
    }
}