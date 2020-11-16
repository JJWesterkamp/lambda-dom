import { addClasses } from '../src'

describe('addClasses()', () => {

    test('works for adding a single class', () => {
        const element = document.createElement('div')
        addClasses('class-a')(element)
        expect(element.className).toBe('class-a')
    })

    test('works for multiple classes at once', () => {
        const element = document.createElement('div')
        addClasses('class-a', 'class-b', 'class-c')(element)
        expect(element.className).toBe('class-a class-b class-c')
    })

    test('does not remove existing classes', () => {
        const element = document.createElement('div')
        element.classList.add('class-x', 'class-y', 'class-z')
        addClasses('class-a', 'class-b')(element)
        expect(element.className).toBe('class-x class-y class-z class-a class-b')
    })

    test('does not remove added classes that already existed', () => {
        const element = document.createElement('div')
        element.classList.add('class-a')
        addClasses('class-a', 'class-b')(element)
        expect(element.className).toBe('class-a class-b')
    })
})