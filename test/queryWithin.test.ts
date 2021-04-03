import { createElement } from './helpers'
import { queryWithin } from '../src'

describe('queryWithin()', () => {
    test('looks within given scope for elements matching a selector', () => {
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

        const result = queryWithin(scope)('.class-a')

        expect(result).toEqual([elementD, elementE, elementF])
    })
})
