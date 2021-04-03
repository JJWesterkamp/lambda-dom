import { showIf } from '../src'

describe('showIf()', () => {
    describe('when given condition is TRUE', () => {
        test('unsets inline display value', () => {
            const element = document.createElement('div')
            element.style.display = 'none'
            showIf(true)(element)
            expect(element.style.display).toEqual('')
        })
    })

    describe('when given condition is FALSE', () => {
        test(`sets inline display value to 'none'`, () => {
            const element = document.createElement('div')
            showIf(false)(element)
            expect(element.style.display).toEqual('none')
        })
    })
})
