/**
 * Get the value of the content attribute for the first (and presumably only)
 * `<meta>` element with given `name` as the value for its name attribute.
 * Optionally takes a transformer to deserialize string values.
 *
 * @param name The value for the `name` attribute to find the `<meta>` element by.
 *
 * @example
 *
 * Considering these meta tags:
 *
 * ```html
 * <meta name="some-json-meta" content='{ "foo": "bar", "baz": 42 }'>
 * <meta name="just-string-meta" content="Lorem ipsum">
 * ```
 *
 * And this object interface:
 *
 * ```typescript
 * interface JsonMeta { foo: string, baz: number }
 * ```
 *
 * We can get the JSON data and parse it like so:
 *
 * ```typescript
 * const jsonMeta: A = getMeta<JsonMeta>('some-json-meta', JSON.parse)
 * ```
 *
 * and simple string metadata doesn't need to be transformed:
 *
 * ```typescript
 * const textgMeta: B = getMeta('just-string-meta')
 * ```
 *
 * And because the queries can fail:
 *
 * ```typescript
 * type A = null | JsonMeta
 * type b = null | string
 * ```
 */
export function getMeta(name: string): string | null
/**
 * Get the value of the content attribute for the first (and presumably only)
 * `<meta>` element with given `name` as the value for its name attribute.
 * Optionally takes a transformer to deserialize string values.
 *
 * @param name The value for the `name` attribute to find the `<meta>` element by.
 * @param transformer A transformer function that deserializes content values.
 *
 * @example
 *
 * Considering these meta tags:
 *
 * ```html
 * <meta name="some-json-meta" content='{ "foo": "bar", "baz": 42 }'>
 * <meta name="just-string-meta" content="Lorem ipsum">
 * ```
 *
 * And this object interface:
 *
 * ```typescript
 * interface JsonMeta { foo: string, baz: number }
 * ```
 *
 * We can get the JSON data and parse it like so:
 *
 * ```typescript
 * const jsonMeta: A = getMeta<JsonMeta>('some-json-meta', JSON.parse)
 * ```
 *
 * and simple string metadata doesn't need to be transformed:
 *
 * ```typescript
 * const textgMeta: B = getMeta('just-string-meta')
 * ```
 *
 * And because the queries can fail:
 *
 * ```typescript
 * type A = null | JsonMeta
 * type b = null | string
 * ```
 */
export function getMeta<T>(name: string, transformer: (content: string) => T): T | null
export function getMeta(name: string, transformer?: (value: string) => any) {

    const element    = document.querySelector(`meta[name="${name}"]`)
    const rawContent = element?.getAttribute('content')

    if (element === null || rawContent == undefined) {
        return null
    }


    if (typeof transformer === 'function') {
        return transformer(rawContent)
    }

    return rawContent
}
