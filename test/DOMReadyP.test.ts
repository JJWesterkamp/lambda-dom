import { DOMReadyP } from '../src'
import { dispatchDOMReadyEvent, symbolA, setReadyState, deferredValue, symbolB } from './helpers'

describe('DOMReadyP()', () => {
    describe(`awaits the DOMContentLoaded event for readyState 'loading'`, () => {
        test('does not resolve while event does not fire', async () => {
            setReadyState('loading')
            const result = await Promise.race([
                DOMReadyP().then(() => symbolA),
                deferredValue(2000, symbolB),
            ])
            expect(result).toBe(symbolB)
        })

        test('resolves once event fires', async () => {
            setReadyState('loading')
            const resultP = DOMReadyP().then(() => symbolA)
            dispatchDOMReadyEvent()
            const result = await resultP
            expect(result).toBe(symbolA)
        })
    })

    test(`Resolves asap for readyState 'interactive'`, async () => {
        setReadyState('interactive')
        const result = await DOMReadyP().then(() => symbolA)
        expect(result).toBe(symbolA)
    })

    test(`Resolves asap for readyState 'complete'`, async () => {
        setReadyState('complete')
        const result = await DOMReadyP().then(() => symbolA)
        expect(result).toBe(symbolA)
    })
})
