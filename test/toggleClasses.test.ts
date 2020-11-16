import { toggleClasses } from '../src'

describe('toggleClasses()', () => {

    describe('without force:boolean', () => {

        test('adds a single class if it does not yet exist', () => {
            const element = document.createElement('div')
            toggleClasses('class-a')(element)
            expect(element.classList.contains('class-a')).toBe(true)
        })

        test('adds multiple classes if they do not yet exist', () => {
            const element = document.createElement('div')
            toggleClasses('class-a', 'class-b')(element)
            expect(element.classList.contains('class-a')).toBe(true)
            expect(element.classList.contains('class-b')).toBe(true)
        })

        test('removes a single class if it does exist', () => {
            const element = document.createElement('div')
            element.className = 'class-a'
            toggleClasses('class-a')(element)
            expect(element.classList.contains('class-a')).toBe(false)
        })

        test('removes multiple classes if they do exist', () => {
            const element = document.createElement('div')
            element.className = 'class-a class-b'
            toggleClasses('class-a', 'class-b')(element)
            expect(element.classList.contains('class-a')).toBe(false)
            expect(element.classList.contains('class-b')).toBe(false)
        })

        test('toggles classes independently', () => {
            const element = document.createElement('div')
            element.className = 'class-a'
            toggleClasses('class-a', 'class-b')(element)
            expect(element.classList.contains('class-a')).toBe(false)
            expect(element.classList.contains('class-b')).toBe(true)
        })
    })

    describe('with force:boolean', () => {

        test('only adds classes with force:true', () => {
            const element = document.createElement('div')
            element.className = 'class-a'
            toggleClasses('class-a', 'class-b')(element, true)
            expect(element.classList.contains('class-a')).toBe(true)
            expect(element.classList.contains('class-b')).toBe(true)
        })

        test('only removes classes with force:false', () => {
            const element = document.createElement('div')
            element.className = 'class-a'
            toggleClasses('class-a', 'class-b')(element, false)
            expect(element.classList.contains('class-a')).toBe(false)
            expect(element.classList.contains('class-b')).toBe(false)
        })
    })

})