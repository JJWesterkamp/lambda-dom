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
export function preventDefault(event: Event): void {
    event.preventDefault()
}