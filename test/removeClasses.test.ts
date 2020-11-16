import { removeClasses } from '../src'


const getElement = () => {
    const element = document.createElement('div')
    element.className = 'class-a class-b class-c'
    return element
}

describe('removeClasses()', () => {

    test('works for removing a single class', () => {
        const elementA = getElement()
        removeClasses('class-a')(elementA)
        expect(elementA.className).toBe('class-b class-c')

        const elementB = getElement()
        removeClasses('class-b')(elementB)
        expect(elementB.className).toBe('class-a class-c')
    })

    test('works for multiple classes at once', () => {
        const elementA = getElement()
        removeClasses('class-a', 'class-b')(elementA)
        expect(elementA.className).toBe('class-c')

        const elementB = getElement()
        removeClasses('class-a', 'class-b', 'class-c')(elementB)
        expect(elementB.className).toBe('')
    })
})