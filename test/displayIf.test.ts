import { displayIf } from '../src'

describe('displayIf()', () => {
    describe('when given condition is TRUE', () => {
        test('unsets inline display value if no explicit value is given', () => {
            const elementA = document.createElement('div')
            displayIf(true)(elementA)
            expect(elementA.style.display).toEqual('')

            const elementB = document.createElement('div')
            elementB.style.display = 'none'
            displayIf(true)(elementB)
            expect(elementB.style.display).toEqual('')
        })

        test('sets inline display value to a given value', () => {
            const elementA = document.createElement('div')
            displayIf(true, 'flex')(elementA)
            expect(elementA.style.display).toEqual('flex')

            const elementB = document.createElement('div')
            elementB.style.display = 'none'
            displayIf(true, 'grid')(elementB)
            expect(elementB.style.display).toEqual('grid')
        })
    })

    describe('when given condition is FALSE', () => {
        test(`sets inline display value to 'none'`, () => {
            const elementA = document.createElement('div')
            displayIf(false)(elementA)
            expect(elementA.style.display).toEqual('none')

            const elementB = document.createElement('div')
            displayIf(false, 'grid')(elementB)
            expect(elementB.style.display).toEqual('none')
        })
    })
})
