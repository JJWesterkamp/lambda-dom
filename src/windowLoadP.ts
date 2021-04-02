/**
 * Returns a promise that resolves as soon as possible after the window is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is `'complete'` at call-time, the returned promise resolves immediately, otherwise it resolves upon
 * the window load event.
 *
 * @return {Promise<void>}
 */
export function windowLoadP(): Promise<void> {
    return new Promise((resolve) => {
        if (document.readyState === 'complete') {
            resolve()
        } else {
            window.addEventListener('load', () => resolve())
        }
    })
}
