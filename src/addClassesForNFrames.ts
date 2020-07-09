import { addClasses } from './addClasses'
import { deferFrames } from './deferFrames'
import { removeClasses } from './removeClasses'

export const addClassesForNFrames = (n: number, ...classes: string[]) => (element: Element): void => {
    addClasses(...classes)(element)
    deferFrames(n, () => removeClasses(...classes)(element))
}