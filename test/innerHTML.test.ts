import { createElement } from './helpers'
import { innerHTML } from '../src'

describe('innerHTML()', () => {
    test('sets element.innerHTML to a given string, or an empty string if given null', () => {
        const element = createElement()
        innerHTML('<li>some <b>test</b> HTML</li>')(element)
        expect(element.innerHTML).toBe('<li>some <b>test</b> HTML</li>')
        innerHTML(null)(element)
        expect(element.innerHTML).toBe('')
    })
})
