import { queryAll } from '../src'

const createElement = (className: string) => {
    const element = document.createElement('div')
    element.classList.add(className)
    return element
}

describe('queryAll()', () => {

    afterEach(() => {
        document.body.innerHTML = ''
    })

    test('calls document.querySelectorAll() for the element lookup', () => {
        const spy = jest.spyOn(document, 'querySelectorAll')
        queryAll('.foo')
        expect(spy.mock.calls.length).toBe(1)
        expect(spy.mock.calls[0][0]).toBe('.foo')
    })

    test('returns an array of all elements by given selector', () => {
        const elementA = createElement('class-a')
        const elementB = createElement('class-a')
        const elementC = createElement('class-a')

        document.body.appendChild(elementA)
        document.body.appendChild(elementB)
        document.body.appendChild(elementC)

        const result = queryAll('.class-a')

        expect(result).toEqual([elementA, elementB, elementC])
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

        const result = queryAll('.class-a', scope)

        expect(result).toEqual([elementD, elementE, elementF])
    })
})