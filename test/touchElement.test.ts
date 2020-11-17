import { touchElement } from '../src'

describe('touchElement()', () => {

    afterEach(() => jest.restoreAllMocks())

    describe('when using the default scope', () => {
        test('Gets the element from document.querySelector, feeds it to given callback, and returns the result', () => {
            const qsResult = Symbol('the element') as unknown as HTMLElement
            const cbResult = Symbol('the result')
            const qsSpy    = jest.spyOn(document, 'querySelector').mockImplementation(() => qsResult)
            const callback = jest.fn((x) => cbResult)
            const returned = touchElement('.the-selector', callback)
            expect(qsSpy.mock.calls.length).toBe(1)
            expect(qsSpy.mock.calls[0][0]).toBe('.the-selector')
            expect(callback.mock.calls.length).toBe(1)
            expect(callback.mock.calls[0][0]).toStrictEqual(qsResult)
            expect(returned).toStrictEqual(cbResult)
        })

        test('does not call the callback if no element is found, returns null instead', () => {
            const qsSpy    = jest.spyOn(document, 'querySelector').mockImplementation(() => null)
            const callback = jest.fn()
            const returned = touchElement('.the-selector', callback)
            expect(callback.mock.calls.length).toBe(0)
            expect(returned).toBeNull()
        })
    })

    describe('when using a given scope', () => {
        test('Gets the element from scope.querySelector, feeds it to given callback, and returns the result', () => {
            const scope    = document.createElement('div')
            const qsResult = Symbol('the element') as unknown as HTMLElement
            const cbResult = Symbol('the result')
            const qsSpy    = jest.spyOn(scope, 'querySelector').mockImplementation(() => qsResult)
            const callback = jest.fn((x) => cbResult)
            const returned = touchElement('.the-selector', callback, scope)
            expect(qsSpy.mock.calls.length).toBe(1)
            expect(qsSpy.mock.calls[0][0]).toBe('.the-selector')
            expect(callback.mock.calls.length).toBe(1)
            expect(callback.mock.calls[0][0]).toStrictEqual(qsResult)
            expect(returned).toStrictEqual(cbResult)
        })
    })
})