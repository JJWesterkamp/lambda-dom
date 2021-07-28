import { preventDefault } from '../src'

describe('preventDefault()', () => {
    test('Calls preventDefault() on given event', () => {
        const e = new Event('click')
        const spy = jest.spyOn(e, 'preventDefault')
        preventDefault(e)
        expect(spy.mock.calls.length).toBe(1)
    })
})