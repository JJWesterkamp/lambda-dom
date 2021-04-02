import { DOMReadyP } from './DOMReadyP'

/**
 * Takes a callback that is executed as soon as possible after the DOM content is loaded.
 * If the {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState `document.readyState`}
 * is either `'interactive'` or `'complete'` at call-time, the callback is called immediately,
 * otherwise it is called upon the DOMContentLoaded event.
 *
 * @param {Function} fn
 * @return {Promise} A promise that resolves with the eventual return value of given callback.
 */
export function onDOMReady<T>(fn: () => T): Promise<T> {
    return DOMReadyP().then(fn)
}
