import { createElement } from './helpers'
import { queryOneWithin } from '../src'

describe('queryOneWithin()', () => {
    test('looks within given scope for an element matching a selector', () => {
        const elementA = createElement('class-a')
        const elementB = createElement('class-b')
        const elementC = createElement('class-c')

        const scope = document.createElement('div')
        const elementD = createElement('class-a')
        const elementE = createElement('class-a')
        const elementF = createElement('class-b')

        document.body.appendChild(elementA)
        document.body.appendChild(elementB)
        document.body.appendChild(elementC)
        scope.appendChild(elementD)
        scope.appendChild(elementE)
        scope.appendChild(elementF)
        document.body.appendChild(scope)

        const fn = queryOneWithin(scope)
        expect(fn('.class-a')).toEqual(elementD)
        expect(fn('.class-b')).toEqual(elementF)
        expect(fn('.nothing')).toBeNull()
    })
})
