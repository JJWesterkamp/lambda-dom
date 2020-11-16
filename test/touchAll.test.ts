import { touchAll } from '../src'

//------------------------------------------------------------------------------
//      Helpers
//------------------------------------------------------------------------------

const addElement = (x: string, parent: Node = document.body) => {
    const element = document.createElement('div')
    element.className = x
    parent.appendChild(element)
    return element
}

const noop = () => undefined

//------------------------------------------------------------------------------
//      Tests
//------------------------------------------------------------------------------

describe('touchAll()', () => {

    let elA: HTMLElement
    let elB: HTMLElement
    let elC: HTMLElement
    let scope: HTMLElement
    let elD: HTMLElement
    let elE: HTMLElement
    let elF: HTMLElement

    beforeAll(() => {
        elA = addElement('element-a')
        elB = addElement('element-b')
        elC = addElement('element-c')

        scope = addElement('scope')

        elD = addElement('element-d', scope)
        elE = addElement('element-e', scope)
        elF = addElement('element-f', scope)
    })

    afterEach(() => jest.restoreAllMocks())

    afterAll(() => document.body.innerHTML = '')

    describe('when searched elements exist', () => {

        test('calls document.querySelector once for each supplied selector', () => {
            const spy = jest.spyOn(document, 'querySelector')

            touchAll([
                '.element-a',
                '.element-b',
                '.element-c',
            ], () => undefined)

            expect(spy.mock.calls.length).toBe(3)
            expect(spy.mock.calls[0][0]).toBe('.element-a')
            expect(spy.mock.calls[1][0]).toBe('.element-b')
            expect(spy.mock.calls[2][0]).toBe('.element-c')
        })

        test('calls given callback with all found elements in order', () => {
            const callbackA = jest.fn();
            touchAll([
                '.element-a',
                '.element-b',
                '.element-c',
                '.element-d',
                '.element-e',
                '.element-f',
            ], callbackA)

            expect(callbackA.mock.calls.length).toBe(1)
            expect(callbackA.mock.calls[0][0]).toStrictEqual(elA)
            expect(callbackA.mock.calls[0][1]).toStrictEqual(elB)
            expect(callbackA.mock.calls[0][2]).toStrictEqual(elC)
            expect(callbackA.mock.calls[0][3]).toStrictEqual(elD)
            expect(callbackA.mock.calls[0][4]).toStrictEqual(elE)
            expect(callbackA.mock.calls[0][5]).toStrictEqual(elF)

            // Shuffle the selectors a bit:

            const callbackB = jest.fn();
            touchAll([
                '.element-b',
                '.element-e',
                '.element-d',
                '.element-a',
                '.element-f',
                '.element-c',
            ], callbackB)

            expect(callbackB.mock.calls.length).toBe(1)
            expect(callbackB.mock.calls[0][0]).toStrictEqual(elB)
            expect(callbackB.mock.calls[0][1]).toStrictEqual(elE)
            expect(callbackB.mock.calls[0][2]).toStrictEqual(elD)
            expect(callbackB.mock.calls[0][3]).toStrictEqual(elA)
            expect(callbackB.mock.calls[0][4]).toStrictEqual(elF)
            expect(callbackB.mock.calls[0][5]).toStrictEqual(elC)

            // Once more

            const callbackC = jest.fn();
            touchAll([
                '.element-e',
                '.element-f',
                '.element-b',
                '.element-d',
                '.element-c',
                '.element-a',
            ], callbackC)

            expect(callbackC.mock.calls.length).toBe(1)
            expect(callbackC.mock.calls[0][0]).toStrictEqual(elE)
            expect(callbackC.mock.calls[0][1]).toStrictEqual(elF)
            expect(callbackC.mock.calls[0][2]).toStrictEqual(elB)
            expect(callbackC.mock.calls[0][3]).toStrictEqual(elD)
            expect(callbackC.mock.calls[0][4]).toStrictEqual(elC)
            expect(callbackC.mock.calls[0][5]).toStrictEqual(elA)
        })
    })


    describe('when searched elements do not all exist', () => {

        test('does not call the given callback function, and returns null', () => {
            const callback = jest.fn();

            const result = touchAll([
                '.element-a',
                '.element-b',
                '.element-c',
                '.i-do-not-exist',
            ], callback)

            expect(callback.mock.calls.length).toBe(0)
            expect(result).toBeNull()
        })

        // With performance in mind, however minimal
        test('returns immediately after the first failed query', () => {

            const spy = jest.spyOn(document, 'querySelector')

            touchAll([
                '.element-e',
                '.element-f',
                '.i-do-not-exist', // Fail here, after 3 queries
                '.element-b',
                '.element-d',
                '.element-c',
                '.element-a',
            ], noop)

            expect(spy.mock.calls.length).toBe(3)
        })
    })

    describe('when given a narrower query scope', () => {

        test('uses querySelector on the given scope', () => {
            const spy = jest.spyOn(scope, 'querySelector')

            touchAll([
                '.element-d',
                '.element-e',
                '.element-f',
            ], noop, scope)

            expect(spy.mock.calls.length).toBe(3)
            expect(spy.mock.calls[0][0]).toBe('.element-d')
            expect(spy.mock.calls[1][0]).toBe('.element-e')
            expect(spy.mock.calls[2][0]).toBe('.element-f')
        })

        test('finds elements within', () => {
            const callback = jest.fn()

            touchAll([
                '.element-d',
                '.element-e',
                '.element-f',
            ], callback, scope)

            expect(callback.mock.calls[0][0]).toStrictEqual(elD)
            expect(callback.mock.calls[0][1]).toStrictEqual(elE)
            expect(callback.mock.calls[0][2]).toStrictEqual(elF)
        })

        test('does not find elements outside of it', () => {

            const result = touchAll([
                '.element-d',
                '.element-e',
                '.element-f',
                '.element-b', // out of scope
            ], () => 'not null', scope)

            expect(result).toBeNull()
        })
    })
})