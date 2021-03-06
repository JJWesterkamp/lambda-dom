/**
 * Returns a promise that resolves as soon as possible after the DOM content is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is `'interactive'` or `'complete'` at call-time, the returned promise resolves immediately, otherwise it resolves upon
 * the DOMContentLoaded event.
 *
 * @return {Promise<void>}
 */
export function DOMReadyP(): Promise<void> {
    return new Promise((resolve) => {
        if (document.readyState !== 'loading') {
            resolve()
        } else {
            window.addEventListener('DOMContentLoaded', () => resolve())
        }
    })
}
