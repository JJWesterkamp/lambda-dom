/**
 * Returns a promise that resolves as soon as possible after the window is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is `'interactive'` or `'complete'` at call-time, the returned promise resolves immediately, otherwise it resolves upon
 * the DOMContentLoaded event.
 *
 * @return {Promise<void>}
 */
export const DOMReadyP = () => new Promise<void>((resolve) => {
    if (document.readyState !== 'loading') {
        resolve()
    } else {
        window.addEventListener('DOMContentLoaded', () => resolve())
    }
})
