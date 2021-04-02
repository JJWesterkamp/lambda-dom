import { onWindowLoad } from '../src'
import { symbolA, setReadyState, deferredValue, symbolB, dispatchWindowLoadEvent } from './helpers'

describe('onWindowLoad()', () => {

    describe(`awaits the load event for readyState 'loading'`, () => {

        test('does not resolve while event does not fire', async () => {
            setReadyState('loading')
            const result = await Promise.race([
                onWindowLoad(() => symbolA),
                deferredValue(2000, symbolB),
            ])
            expect(result).toBe(symbolB)
        })

        test('resolves once event fires', async () => {
            setReadyState('loading')
            const resultP = onWindowLoad(() => symbolA)
            dispatchWindowLoadEvent()
            const result = await resultP
            expect(result).toBe(symbolA)
        })
    })

    describe(`awaits the load event for readyState 'interactive'`, () => {
        test('does not resolve while event does not fire', async () => {
            setReadyState('interactive')
            const result = await Promise.race([
                onWindowLoad(() => symbolA),
                deferredValue(2000, symbolB),
            ])
            expect(result).toBe(symbolB)
        })

        test('resolves once event fires', async () => {
            setReadyState('interactive')
            const resultP = onWindowLoad(() => symbolA)
            dispatchWindowLoadEvent()
            const result = await resultP
            expect(result).toBe(symbolA)
        })
    })

    test(`Executes callback asap for readyState 'complete'`, async () => {
        setReadyState('complete')
        const result = await onWindowLoad(() => symbolA)
        expect(result).toBe(symbolA)
    })
})
