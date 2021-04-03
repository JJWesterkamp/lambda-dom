import { remove } from '../src/remove'
import { createElement } from './helpers'

describe('remove()', () => {
    test('removes an element from the DOM if it is inserted', () => {
        const parent = document.createElement('div')
        const child = createElement('class-a')

        parent.appendChild(child)

        expect(child.parentNode).toBe(parent)
        expect(parent.children).toContain(child)

        remove(child)

        expect(child.parentNode).toBeNull()
        expect(parent.children).not.toContain(child)
    })

    test('skips silently if the given element is not inserted', () => {
        const child = createElement('class-a')
        remove(child)
        // No errors should be thrown.
    })
})
