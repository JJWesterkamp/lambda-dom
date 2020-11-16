import { display } from '../src'

describe('display()', () => {
    test('it sets display values', () => {
        const element = document.createElement('div')

        for (const val of ['block', 'none', 'flex', 'grid']) {
            display(val)(element)
            expect(element.style.display).toBe(val)
        }
    })

    test('it unsets display value when given null', () => {
        const element = document.createElement('div')
        element.style.display = 'none'

        display(null)(element)
        expect(element.style.display).toBe('')
    })
})