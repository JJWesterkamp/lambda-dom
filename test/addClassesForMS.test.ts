import { addClassesForMS } from '../src'

jest.useFakeTimers()

describe('addClassesForMS()', () => {

    let setTimeoutMock = jest.spyOn(window, 'setTimeout')

    afterEach(() => {
        jest.clearAllMocks()
    });

    test('adds the specified classes immediately', () => {
        const element = document.createElement('div')
        addClassesForMS(500, 'class-a')(element)
        expect(element.className).toBe('class-a')
    })

    test('calls setTimeout() with specified delay', () => {
        const element = document.createElement('div')
        addClassesForMS(500, 'class-a')(element)
        expect(setTimeoutMock).toHaveBeenCalledTimes(1);
        expect(setTimeoutMock).toHaveBeenLastCalledWith(expect.any(Function), 500);
    })

    test('removes the added classes after the timeout has passed', () => {
        const element = document.createElement('div')
        addClassesForMS(500, 'class-a')(element)
        jest.runAllTimers();
        expect(element.className).toBe('')
    })

    test('does not touch other classes', () => {
        const element = document.createElement('div')
        element.classList.add('class-x', 'class-y', 'class-z')
        addClassesForMS(500, 'class-a')(element)
        expect(element.className).toBe('class-x class-y class-z class-a')
        jest.runAllTimers();
        expect(element.className).toBe('class-x class-y class-z')
    })
})