/**
 * Takes a predicate function, an `onTrue` function and an `onFalse` function, and returns a function that
 * takes an argument, and either applies `onTrue` or `onFalse` to the argument based on the result of
 * applying `pred` to the argument.
 *
 * @param {(x: T) => boolean} pred
 * @param {(x: T) => U} onTrue
 * @param {(x: T) => V} onFalse
 * @return {(x: T) => (U | V)}
 */
export function ifElse<T, U, V>(pred: (x: T) => boolean, onTrue: (x: T) => U, onFalse: (x: T) => V): (x: T) => U | V {
    return (value) => pred(value) ? onTrue(value) : onFalse(value)
}
