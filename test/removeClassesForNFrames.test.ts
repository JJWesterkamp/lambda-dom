import { requestAnimationFrameMock } from "./mocks/requestAnimationFrame.mock";
import { removeClassesForNFrames } from '../src'

const getElement = () => {
    const element = document.createElement('div')
    element.className = 'class-a class-b class-c'
    return element
}

describe('removeClassesForNFrames()', () => {

    beforeEach(() => {
        requestAnimationFrameMock.reset();
    })

    test('removes a specified single class immediately', () => {
        const element = getElement()
        removeClassesForNFrames(10, 'class-a')(element)
        expect(element.classList.contains('class-a')).toBe(false)
        expect(element.classList.contains('class-b')).toBe(true)
        expect(element.classList.contains('class-c')).toBe(true)
    })

    test('removes specified multiple classes immediately', () => {
        const element = getElement()
        removeClassesForNFrames(10, 'class-a', 'class-b')(element)
        expect(element.classList.contains('class-a')).toBe(false)
        expect(element.classList.contains('class-b')).toBe(false)
        expect(element.classList.contains('class-c')).toBe(true)
    })

    test('only re-adds removed classes after n + 1 animation-frames have passed', () => {

        const element = getElement()

        const n = 10
        removeClassesForNFrames(n, 'class-a', 'class-b')(element)

        for (let i = 1; i <= n; i++) {
            expect(requestAnimationFrameMock.handleCounter).toBe(i)
            expect(element.classList.contains('class-a')).toBe(false)
            expect(element.classList.contains('class-b')).toBe(false)
            expect(element.classList.contains('class-c')).toBe(true)
            requestAnimationFrameMock.triggerNextAnimationFrame()
        }

        // The final animation-frame that invokes the passed callback:
        requestAnimationFrameMock.triggerNextAnimationFrame()
        expect(element.classList.contains('class-a')).toBe(true)
        expect(element.classList.contains('class-b')).toBe(true)
        expect(element.classList.contains('class-c')).toBe(true)
    })
})