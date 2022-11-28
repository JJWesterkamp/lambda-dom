import { createElement } from './helpers'
import { on } from '../src'

describe('on()', () => {
    test('adds an event listener to a given element', () => {
        const element = createElement()
        const handler = jest.fn()
        on('click', handler)(element)
        element.click()
        expect(handler).toBeCalledTimes(1)
        element.click()
        element.click()
        expect(handler).toBeCalledTimes(3)
    })

    test('Returns an object with remove() that allows removal of the listener', () => {
        const element = createElement()
        const handler = jest.fn()
        const remover = on('click', handler)(element)
        element.click()
        expect(handler).toBeCalledTimes(1)
        remover.remove()
        element.click()
        element.click()
        expect(handler).toBeCalledTimes(1)
    })
})
