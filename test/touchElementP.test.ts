const mockResult = Symbol('The element') as unknown as HTMLElement
const spy = jest.fn().mockImplementation(
    (selector) => Promise.resolve(mockResult)
)


jest.mock('../src/touchElement', () => ({
    __esModule: true,
    touchElement: spy,
}))

import { touchElementP, touchElement } from '../src'
touchElement

describe('touchElementP()', () => {

    afterEach(() => jest.resetAllMocks())
    afterAll(() => jest.restoreAllMocks())

    describe('when using the default scope', () => {

        test('propagates selector and the default scope (document)', () => {
            touchElementP('.the-selector')
            expect(spy.mock.calls[0][0]).toBe('.the-selector')
            expect(spy.mock.calls[0][2]).toBe(document)
        })

        test('resolves with the right element', () => {
            const result = touchElementP('.the-selector')
            expect(result).resolves.toBe(mockResult)
        })
    })

    describe('when given an alternative scope', () => {
        test('propagates selector and the given scope', () => {
            const scope = document.createElement('div')
            touchElementP('.the-selector', scope)
            expect(spy.mock.calls[0][0]).toBe('.the-selector')
            expect(spy.mock.calls[0][2]).toBe(scope)
        })

        test('resolves with the right element', () => {
            const scope = document.createElement('div')
            const result = touchElementP('.the-selector', scope)
            expect(result).resolves.toBe(mockResult)
        })
    })

    test('never resolves when the element is not found', () => {
        // Todo: how to do this?
    })
})