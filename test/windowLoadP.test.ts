import { windowLoadP } from '../src'
import { deferredValue, dispatchWindowLoadEvent, setReadyState, symbolA, symbolB } from './helpers'

describe('windowLoadP()', () => {
    describe(`awaits the load event for readyState 'loading'`, () => {
        test('does not resolve while event does not fire', async () => {
            setReadyState('loading')
            const result = await Promise.race([
                windowLoadP().then(() => symbolA),
                deferredValue(2000, symbolB),
            ])
            expect(result).toBe(symbolB)
        })

        test('resolves once event fires', async () => {
            setReadyState('loading')
            const resultP = windowLoadP().then(() => symbolA)
            dispatchWindowLoadEvent()
            const result = await resultP
            expect(result).toBe(symbolA)
        })
    })

    describe(`awaits the load event for readyState 'interactive'`, () => {
        test('does not resolve while event does not fire', async () => {
            setReadyState('interactive')
            const result = await Promise.race([
                windowLoadP().then(() => symbolA),
                deferredValue(2000, symbolB),
            ])
            expect(result).toBe(symbolB)
        })

        test('resolves once event fires', async () => {
            setReadyState('interactive')
            const resultP = windowLoadP().then(() => symbolA)
            dispatchWindowLoadEvent()
            const result = await resultP
            expect(result).toBe(symbolA)
        })
    })

    test(`Resolves asap for readyState 'complete'`, async () => {
        setReadyState('complete')
        const result = await windowLoadP().then(() => symbolA)
        expect(result).toBe(symbolA)
    })
})
