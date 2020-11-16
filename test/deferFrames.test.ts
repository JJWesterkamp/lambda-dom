import { requestAnimationFrameMock } from './mocks/requestAnimationFrame.mock'
import { deferFrames } from '../src'

describe('deferFrames()', () => {

    beforeEach(() => {
        requestAnimationFrameMock.reset();
    })

    test('calls requestAnimationFrame() n + 1 times for given delays >= 1', () => {

        const ns = [10, 15, 20]
        const mockCallback = jest.fn();

        for (const n of ns) {
            deferFrames(n, mockCallback)
            requestAnimationFrameMock.triggerAllAnimationFrames()
            expect(requestAnimationFrameMock.handleCounter).toBe(n+1)
            requestAnimationFrameMock.reset()
        }
    })

    test('calls requestAnimationFrame() once for given delays <= 0', () => {

        for (const n of [-10, -1, 0]) {
            deferFrames(n, () => undefined)
            requestAnimationFrameMock.triggerAllAnimationFrames()
            expect(requestAnimationFrameMock.handleCounter).toBe(1)
            requestAnimationFrameMock.reset();
        }
    })

    test('only calls callback after n animationFrames have passed', () => {

        for (const n of [10, 15, 20]) {

            const mockCallback = jest.fn()
            deferFrames(n, mockCallback)

            for (let i = 1; i <= n; i++) {
                expect(requestAnimationFrameMock.handleCounter).toBe(i)
                expect(mockCallback.mock.calls.length).toBe(0)
                requestAnimationFrameMock.triggerNextAnimationFrame()
            }

            requestAnimationFrameMock.triggerNextAnimationFrame()
            expect(mockCallback.mock.calls.length).toBe(1)

            requestAnimationFrameMock.reset()
        }
    })
})