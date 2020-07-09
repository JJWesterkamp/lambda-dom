/**
 * Takes a number `n` and a callback function, and executes the callback function after `n`
 * animation frames have passed.
 * @Todo Add the possibility to cancel. The requires the request ID of the latest request.
 */
export const deferFrames = (n: number, handler: () => any): void => {
    n === 0 ? requestAnimationFrame(handler) : deferFrames(n - 1, () => requestAnimationFrame(handler))
}