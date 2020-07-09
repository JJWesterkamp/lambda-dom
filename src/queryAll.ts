export const queryAll = <T extends HTMLElement = HTMLElement>(selector: string, scope: ParentNode = document): T[] => (
    Array.prototype.slice.call(scope.querySelectorAll(selector))
)
