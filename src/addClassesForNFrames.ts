import { addClasses } from './addClasses'
import { deferFrames } from './deferFrames'
import { removeClasses } from './removeClasses'

export function addClassesForNFrames(n: number, ...classes: string[]) {
    return (element: Element): void => {
        addClasses(...classes)(element)
        deferFrames(n, () => removeClasses(...classes)(element))
    }
}