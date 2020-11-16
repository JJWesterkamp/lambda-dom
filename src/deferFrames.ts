/**
 * Takes a positive (>= 0) integer `n` and a callback function, and executes the callback function after `n`
 * animation frames have passed.
 *
 * @Todo Add the possibility to cancel. The requires the request ID of the latest request.
 *
 * @example
 *
 * declare const f: () => void
 * // Run `f` after ten animation frames
 * deferFrames(10, f)
 *
 * // The following 2 statements are equivalent:
 * deferFrames(0, f)
 * requestAnimationFrame(f)
 *
 * // And the following 2 statements are equivalent:
 * deferFrames(1, f)
 * requestAnimationFrame(() => requestAnimationFrame(f))
 *
 * // Etc..
 */
export function deferFrames(n: number, handler: () => any): void {
    n = Math.max(0, n)
    n === 0 ? requestAnimationFrame(handler) : deferFrames(n - 1, () => requestAnimationFrame(handler))
}