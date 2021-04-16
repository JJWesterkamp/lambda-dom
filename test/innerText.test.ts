import { createElement } from './helpers'
import { innerText } from '../src'

describe('innerText()', () => {
    test('sets element.innerText to a given string, or an empty string if given null', () => {
        const element = createElement()
        innerText('some test text')(element)
        expect(element.innerText).toBe('some test text')
        innerText(null)(element)
        expect(element.innerText).toBe('')
    })
})
