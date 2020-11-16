import { setMeta } from '../src'

describe('setMeta()', () => {

    afterEach(() => {
        document.head.innerHTML = ''
        jest.restoreAllMocks()
    })

    test('queries the DOM for an existing <meta> element', () => {
        const spy = jest.spyOn(document, 'querySelector')
        setMeta('foo')('bar')

        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0]).toBe('meta[name="foo"]')
    })

    test('creates a new <meta> element if it does not exist, and sets the right value', () => {
        const spy = jest.spyOn(document, 'createElement')
        const result = setMeta('foo')('bar')

        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0]).toBe('meta')
        expect(result.content).toBe('bar')
    })

    test('reuses an existing <meta> element by given name, and sets the right value', () => {
        // new element created, as previously tested
        const resultA = setMeta('foo')('bar')
        const spy     = jest.spyOn(document, 'createElement')
        const resultB = setMeta('foo')('baz')

        expect(spy.mock.calls.length).toBe(0)
        expect(resultA).toBe(resultB)
        expect(resultB.content).toBe('baz')
    })
})