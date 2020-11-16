import { getMeta } from '../src'


const metaElement = (name: string, content: string) => {
    const element = document.createElement('meta')
    element.name = name
    element.content = content
    return element
}


describe('getMeta()', () => {

    afterEach(() => {
        document.head.innerHTML = ''
    })

    test('it returns a meta value for an element lookup by name attribute', () => {
        const element = metaElement('foo', 'bar')
        document.head.appendChild(element)

        const value = getMeta('foo')
        expect(value).toBe('bar')
    })


    test('it returns null for non-existent meta element lookups', () => {
        const value = getMeta('foo')
        expect(value).toBe(null)
    })

    test('it calls a given value transformer with the content value', () => {
        const element = metaElement('foo', '42')
        document.head.appendChild(element)

        const transform = jest.fn(parseInt)

        const value = getMeta('foo', transform)
        expect(transform.mock.calls[0][0]).toBe('42')
        expect(value).toBe<number>(42)
    })
})