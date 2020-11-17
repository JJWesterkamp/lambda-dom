const spy  = jest.fn().mockImplementation(
    (selector) => Promise.resolve(selector)
)

jest.mock('../src/touchElementP', () => ({
    __esModule: true,
    touchElementP: spy,
}))

import { touchAllP, touchElementP } from '../src'
touchElementP

describe('touchAllP()', () => {
    afterEach(() => jest.resetAllMocks())
    afterAll(() => jest.restoreAllMocks())

    test('calls touchElementP for each given selector, and combines the promises correctly', () => {
        const input: any = ['.selector-a', '.selector-b', '.selector-c']
        const result = touchAllP(input)
        expect(spy.mock.calls.length).toBe(3)
        expect(spy.mock.calls[0][0]).toBe('.selector-a')
        expect(spy.mock.calls[1][0]).toBe('.selector-b')
        expect(spy.mock.calls[2][0]).toBe('.selector-c')
        expect(result).resolves.toEqual(input)
    })

    test('uses document as default scope', () => {
        touchAllP(['.selector-a', '.selector-b', '.selector-c'])
        expect(spy.mock.calls[0][1]).toBe(document)
        expect(spy.mock.calls[1][1]).toBe(document)
        expect(spy.mock.calls[2][1]).toBe(document)
    })

    test('uses a provided scope', () => {
        touchAllP(['.selector-a', '.selector-b', '.selector-c'], 'the scope' as unknown as HTMLElement)
        expect(spy.mock.calls[0][1]).toBe('the scope')
        expect(spy.mock.calls[1][1]).toBe('the scope')
        expect(spy.mock.calls[2][1]).toBe('the scope')
    })
})