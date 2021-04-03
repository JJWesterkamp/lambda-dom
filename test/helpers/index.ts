export const symbolA = Symbol('A')
export const symbolB = Symbol('B')
export const symbolC = Symbol('C')
export const symbolD = Symbol('D')

export const setReadyState = (state: DocumentReadyState) => {
    Object.defineProperty(window.document, 'readyState', {
        configurable: true,
        get() {
            return state
        }
    })
}

export const dispatchDOMReadyEvent = () => window.document.dispatchEvent(new Event(`DOMContentLoaded`, {
    bubbles: true,
    cancelable: true
}))

export const dispatchWindowLoadEvent = () => window.dispatchEvent(new Event(`load`, {
    bubbles: true,
    cancelable: true
}))

export const deferredValue = <T>(ms: number, value: T): Promise<T> => new Promise((resolve) => setTimeout(() => resolve(value), ms))

export const createElement = (className: string) => {
    const element = document.createElement('div')
    element.classList.add(className)
    return element
}
