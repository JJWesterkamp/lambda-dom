import { deferFramesP } from '../src'
import { requestAnimationFrameMock } from './mocks/requestAnimationFrame.mock'

describe('deferFramesP()', () => {

    beforeEach(() => {
        requestAnimationFrameMock.reset();
    })


    test('Promise only resolves after n animation-frames have passed', () => {

        for (const n of [10, 15, 20]) {
            const p = deferFramesP(n)
            // Todo: figure out how to assert that the promises do NOT resolve
            //       until the required amount of frames have passed.
        }
    })

    test('promise resolves at the next animation frame for given delays <= 0', async () => {
        for (const n of [-10, -1, 0]) {
            const p = deferFramesP(n)
            requestAnimationFrameMock.triggerNextAnimationFrame()
            await p // This test fails through time-out
            requestAnimationFrameMock.reset()
        }
    })
})