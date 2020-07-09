import { addClasses } from './addClasses'
import { removeClasses } from './removeClasses'

export const removeClassesForMS = (ms: number, ...classes: string[]) => (element: HTMLElement): void => {
    removeClasses(...classes)(element)
    setTimeout(() => addClasses(...classes)(element), ms)
}