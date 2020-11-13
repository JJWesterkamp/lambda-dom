import { deferFrames } from './deferFrames'

/**
 * Returns a `Promise<void>` that resolves after `n` animation frames.
 *
 * @example
 * ```javascript
 * async function f() {
 *      // Do something immediately...
 *      await deferFramesP(10)
 *      // Do something else after 10 animation frames:
 * }
 * ```
 */
export function deferFramesP(n: number): Promise<void> {
    return new Promise((resolve) => deferFrames(n, resolve))
}