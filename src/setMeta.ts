export function setMeta(name: string, value: string) {

    let element: HTMLMetaElement | null = document.querySelector(`meta[name="${name}"]`)

    if ( ! element) {
        element = document.createElement('meta')
        element.name = name

        const head = document.head || document.getElementsByTagName("head")[0]

        head.appendChild(element)
    }

    element.content = value
}
