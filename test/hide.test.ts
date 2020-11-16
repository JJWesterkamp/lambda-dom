import { hide } from '../src'

describe('hide()', () => {
    test('it sets the display attribute to "none"', () => {
        const element = document.createElement('div')
        const spy = jest.spyOn(element.style, 'display', 'set')
        hide(element)
        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0]).toBe('none')
        expect(element.style.display).toBe('none')
    })
})