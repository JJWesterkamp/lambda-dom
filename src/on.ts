export interface ListenerRemover {
    remove(): void
}

export function on<TEvent extends keyof GlobalEventHandlersEventMap>(
    event: TEvent,
    handler: (event: GlobalEventHandlersEventMap[TEvent]) => void,
): (element: HTMLElement) => ListenerRemover {
    return (element) => {
        element.addEventListener(event, handler)
        return { remove: () => element.removeEventListener(event, handler) }
    }
}