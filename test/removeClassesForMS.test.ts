import { removeClassesForMS } from '../src'

const getElement = () => {
    const element = document.createElement('div')
    element.className = 'class-a class-b class-c'
    return element
}

jest.useFakeTimers();

describe('removeClassesForMS()', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('removes a specified single class immediately', () => {
        const element = getElement()
        removeClassesForMS(500, 'class-a')(element)
        expect(element.classList.contains('class-a')).toBe(false)
        expect(element.classList.contains('class-b')).toBe(true)
        expect(element.classList.contains('class-c')).toBe(true)
    })

    test('removes specified multiple classes immediately', () => {
        const element = getElement()
        removeClassesForMS(500, 'class-a', 'class-b')(element)
        expect(element.classList.contains('class-a')).toBe(false)
        expect(element.classList.contains('class-b')).toBe(false)
        expect(element.classList.contains('class-c')).toBe(true)
    })

    test('calls setTimeout() with specified delay', () => {
        const element = getElement()
        removeClassesForMS(500, 'class-a')(element)
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500);
    })

    test('re-adds a single removed class after the timeout has passed', () => {
        const element = getElement()
        removeClassesForMS(500, 'class-a')(element)
        jest.runAllTimers();
        expect(element.classList.contains('class-a')).toBe(true)
    })

    test('re-adds multiple removed classes after the timeout has passed', () => {
        const element = getElement()
        removeClassesForMS(500, 'class-a', 'class-b')(element)
        jest.runAllTimers();
        expect(element.classList.contains('class-a')).toBe(true)
        expect(element.classList.contains('class-b')).toBe(true)
    })
})