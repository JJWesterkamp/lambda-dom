/**
 * Takes a string name and returns a new function that takes a string content, and
 * then updates the `<meta>` tag with the given name if it exists, or otherwise
 * creates a new one. The meta element to which the content value was set is returned
 * for reference.
 *
 * When a new element is created it will be appended to the end of `<head>`.
 *
 * @param name The value for the name attribute.
 * @param content The value for the content attribute.
 *
 * @example
 * ```typescript
 * const element = setMeta('foo')('bar')
 * ```
 * This updates or creates the following element
 * ```
 * <meta name="foo" content="bar">
 * ```
 */
export function setMeta(name: string): (content: string) => HTMLMetaElement {
    return (content) => {

        let element: HTMLMetaElement | null = document.querySelector(`meta[name="${name}"]`)

        if ( ! element) {
            element      = document.createElement('meta')
            element.name = name
            document.head.appendChild(element)
        }

        element.content = content
        return element
    }
}
