import { show } from '../src'

describe('show()', () => {
    test('it unsets any set display value', () => {
        const element = document.createElement('div')
        element.style.display = 'none'

        const spy = jest.spyOn(element.style, 'display', 'set')
        show(element)
        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0]).toBe('')
        expect(element.style.display).toBe('')
    })
})