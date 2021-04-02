import { windowLoadP } from './windowLoadP'

/**
 * Takes a callback that is executed as soon as possible after the window is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is `'complete'` at call-time, the callback is called immediately, otherwise it is called upon
 * the window load event.
 *
 * @param {Function} fn
 * @return {Promise} A promise that resolves with the eventual return value of given callback.
 */
export function onWindowLoad<T>(fn: () => T): Promise<T> {
    return windowLoadP().then(fn)
}
