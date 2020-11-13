/**
 * Takes a string name and returns a new function that takes a string content, and
 * then updates the `<meta>` tag with the given name if it exists, or otherwise
 * creates a new one. The meta element to which the content value was set is returned
 * for reference.
 *
 * When a new element is created it will be appended to the end of `<head>`.
 *
 * @example
 *
 * const element = setMeta('foo')('bar')
 * // This updates or creates the following element
 * <meta name="foo" content="bar">
 */
export function setMeta(name: string) {
    return (content: string): HTMLMetaElement => {

        let element: HTMLMetaElement | null = document.querySelector(`meta[name="${name}"]`)

        if ( ! element) {
            element      = document.createElement('meta')
            element.name = name
            const head   = document.head || document.getElementsByTagName("head")[0]
            head.appendChild(element)
        }

        element.content = content
        return element
    }
}
