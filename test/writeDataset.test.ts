import { writeDataset } from '../src'

describe('writeDataset()', () => {
    test('Sets dataset values', () => {
        // Todo: can this be done in a cleaner way?
        const element = {
            dataset: {
                set fooBar(x: string) {

                }
            }
        } as unknown as HTMLElement

        const spy = jest.spyOn(element.dataset, 'fooBar', 'set')
        writeDataset('fooBar')('baz')(element)
        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0]).toBe('baz')
    })
})