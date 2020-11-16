import { readDataset } from '../src'

describe('readDataset()', () => {

    test('returns a set value', () => {
        const element = document.createElement('div')
        element.setAttribute('data-foo-bar', 'baz')
        const result = readDataset('fooBar')(element)
        expect(result).toBe('baz')
    })

    test('applies a given transformer to the fetched value', () => {
        const transform = jest.fn(parseInt)
        const element = document.createElement('div')
        element.setAttribute('data-foo-bar', '42')
        const result = readDataset('fooBar', transform)(element)
        expect(transform.mock.calls.length).toBe(1)
        expect(transform.mock.calls[0][0]).toBe('42')
        expect(result).toBe<number>(42)
    })

    test('does not call a given transformer if the value is not set, and returns undefined', () => {
        const transform = jest.fn()
        const element = document.createElement('div')

        const result = readDataset('foo')(element)
        expect(transform.mock.calls.length).toBe(0)
        expect(result).toBe(undefined)
    })
})