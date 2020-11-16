import { requestAnimationFrameMock } from "./mocks/requestAnimationFrame.mock";
import { addClassesForNFrames } from '../src'

describe('addClassesForNFrames()', () => {

    beforeEach(() => {
        requestAnimationFrameMock.reset();
    })

    test('adds the specified classes immediately', () => {
        const element = document.createElement('div')
        addClassesForNFrames(10, 'class-a')(element)
        expect(element.className).toBe('class-a')
    })


    test('only removes set classes after n + 1 animation-frames have passed', () => {
        const element = document.createElement('div')

        const n = 10
        addClassesForNFrames(n, 'class-a')(element)

        for (let i = 1; i <= n; i++) {
            expect(requestAnimationFrameMock.handleCounter).toBe(i)
            expect(element.className).toBe('class-a')
            requestAnimationFrameMock.triggerNextAnimationFrame()
        }

        // The final animation-frame that invokes the passed callback:
        requestAnimationFrameMock.triggerNextAnimationFrame()
        expect(element.className).toBe('')
    })
})