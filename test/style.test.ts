import { style } from '../src'

describe('display()', () => {
    test('sets a partial CSSStyleDeclaration object to the style attribute of an element', () => {
        const element = document.createElement('div')
        const styles: Partial<CSSStyleDeclaration> = {
            border: '1px solid red',
            color: 'red',
            whiteSpace: 'nowrap',
            backgroundColor: 'white',
            transform: 'translate(10px, 5px)',
        }


        const spies = Object.keys(styles).map((prop: any) => jest.spyOn(element.style, prop, 'set'))

        style(styles)(element)

        Object.entries(styles).forEach(([key, value], i) => {
            expect(spies[i].mock.calls.length).toBe(1)
            expect(spies[i].mock.calls[0][0]).toBe(value)
            expect(element.style[(key as any)]).toBe(value)
        })
    })
})