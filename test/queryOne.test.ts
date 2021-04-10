import { queryOne } from '../src'
import { createElement } from './helpers'

describe('queryOne()', () => {

    afterEach(() => {
        document.body.innerHTML = ''
    })

    describe('when using the default scope', () => {
        test('calls document.querySelector() for the element lookup', () => {
            const spy = jest.spyOn(document, 'querySelector')
            queryOne('.foo')
            expect(spy.mock.calls.length).toBe(1)
            expect(spy.mock.calls[0][0]).toBe('.foo')
        })


        test('returns the first element matched by given selector', () => {
            const elementA = createElement('class-a')
            const elementB = createElement('class-a')
            const elementC = createElement('class-a')

            document.body.appendChild(elementA)
            document.body.appendChild(elementB)
            document.body.appendChild(elementC)

            expect(queryOne('.class-a')).toEqual(elementA)
        })
    })

    test('uses an alternative scope for the lookup when given', () => {
        const elementA = createElement('class-a')
        const elementB = createElement('class-a')
        const elementC = createElement('class-a')

        const scope = document.createElement('div')
        const elementD = createElement('class-a')
        const elementE = createElement('class-a')
        const elementF = createElement('class-a')

        document.body.appendChild(elementA)
        document.body.appendChild(elementB)
        document.body.appendChild(elementC)
        scope.appendChild(elementD)
        scope.appendChild(elementE)
        scope.appendChild(elementF)
        document.body.appendChild(scope)

        const result = queryOne('.class-a', scope)

        expect(result).toEqual(elementD)
    })
})
