import { touchElement } from './touchElement'

/**
 * Finds the first element within the set scope that matches `selector`. If found the returned
 * promise resolves with the element. If no element is found, the promise will never resolve.
 *
 * @example
 *
 * const button = await touchElementP<HTMLButtonElement>('#my-button')
 */
export function touchElementP<T extends Element>(selector: string, scope: ParentNode = document.body): Promise<T> {
    return new Promise((resolve) => touchElement<T>(selector, resolve, scope))
}