/**
 * Write dataset values. Takes a key, and returns a new function that takes the value, which in turn
 * returns the last function that takes the element to write the key-value pair to.
 *
 * @param key The dataset property to write.
 * @param value The value to write to the property.
 * @param element An element upon which to perform the dataset update.
 *
 * @example
 *
 * ```typescript
 * declare const someElement: HTMLElement
 *
 * writeDataset('someKey') ('someValue') (someElement)
 * ```
 */
export function writeDataset(key: string): (value: string) => (element: HTMLElement) => void {
    return (value) => (element) => void (element.dataset[key] = value)
}
