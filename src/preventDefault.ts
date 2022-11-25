/**
 * Takes events and calls their `.preventDefault()` method.
 *
 * @param event - The event instance to call the method on.
 * @example
 *
 * ```typescript
 * declare const event: Event
 * preventDefault(event)
 * ```
 */
export function preventDefault<T extends Event>(event: T): T {
    event.preventDefault()
    return event
}
