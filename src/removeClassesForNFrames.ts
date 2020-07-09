import { addClasses } from './addClasses'
import { deferFrames } from './deferFrames'
import { removeClasses } from './removeClasses'

export const removeClassesForNFrames = (n: number, ...classes: string[]) => (element: HTMLElement): void => {
    removeClasses(...classes)(element)
    deferFrames(n, () => addClasses(...classes)(element))
}