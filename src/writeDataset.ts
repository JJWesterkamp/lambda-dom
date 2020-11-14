/**
 * Write dataset values. Takes a key, and returns a new function that takes the value, which in turn
 * returns the last function that takes the element to write the key-value pair to.
 *
 * @example
 *
 * declare const someElement: HTMLElement
 *
 * writeDataset('someKey') ('someValue') (someElement)
 */
export function writeDataset(key: string) {
    return (value: string) => (element: HTMLElement) => void (element.dataset[key] = value)
}
