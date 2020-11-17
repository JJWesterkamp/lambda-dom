import { deferFrames } from './deferFrames'

/**
 * Returns a `Promise<void>` that resolves after `n` animation frames have passed.
 * Like {@linkcode deferFrames} but 'portable', so that many callbacks can subscribe
 * to the 'event' of `n` frames having passed.
 *
 * @param n The amount of animation frames to wait before the returned promise resolves.
 *
 * @example
 *
 * ```typescript
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