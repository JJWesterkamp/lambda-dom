/**
 * Read dataset values. Takes a dataset key and optionally a transformer for the corresponding value,
 * and returns a new function that takes the element to read the dataset key from.
 *
 * @param key The dataset key to read (camelCase, like the native dataset API).
 * @param element The element to read the dataset value from.
 *
 * @example
 *
 * ```typescript
 * declare const someElement: HTMLElement
 *
 * const x: T = readDataset('someKey') (someElement)
 * const y: U = readDataset('someOtherKey', parseInt) (someElement)
 *
 * type T = undefined | string
 * type U = undefined | number
 * ```
 */
export function readDataset(key: string): (element: HTMLElement) => string | undefined
/**
 * Read dataset values. Takes a dataset key and optionally a transformer for the corresponding value,
 * and returns a new function that takes the element to read the dataset key from.
 *
 * @param key The dataset key to read (camelCase, like the native dataset API).
 * @param transform The optional transformer function for dataset values.
 * @param element The element to read the dataset value from.
 *
 */
export function readDataset<T>(key: string, transform: (value: string) => T): (element: HTMLElement) => T | undefined
export function readDataset(key: string, transform = (x: string) => x) {
    return (element: HTMLElement) => {
       const value = element.dataset[key]
        return value === undefined ? undefined : transform(value)
    }
}
