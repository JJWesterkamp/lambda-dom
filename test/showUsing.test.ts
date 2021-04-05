import { showUsing } from '../src'
import { createElement } from './helpers'

describe('showUsing()', () => {

    test('calls a given predicate for all calls to the returned function', () => {
        const stub = jest.fn()

        const elementA = createElement('foo')
        const elementB = createElement('bar')
        const elementC = createElement('baz')

        const fn = showUsing(stub)

        fn(elementA)
        fn(elementB)
        fn(elementC)

        expect(stub).toBeCalledTimes(3)
        expect(stub.mock.calls[0][0]).toBe(elementA)
        expect(stub.mock.calls[1][0]).toBe(elementB)
        expect(stub.mock.calls[2][0]).toBe(elementC)
    })

    test('Sets the right display value depending on predicate result', () => {
        const isFoo = (element: HTMLElement) => element.classList.contains('foo')

        const elementA = createElement('foo')
        const elementB = createElement('bar')

        showUsing(isFoo)(elementA)
        expect(elementA.style.display).toEqual('')

        showUsing(isFoo)(elementB)
        expect(elementB.style.display).toEqual('none')
    })
})
