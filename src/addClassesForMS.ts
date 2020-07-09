import { addClasses } from './addClasses'
import { removeClasses } from './removeClasses'


export const addClassesForMS = (ms: number, ...classes: string[]) => (element: Element): void => {
    addClasses(...classes)(element)
    setTimeout(() => removeClasses(...classes)(element), ms)
}