/**
 * Autocomplete list for the most commonly used `style.display` values.
 * Includes the generic `string` type for compatibility and special syntax,
 * as well as `null | undefined` which are used by lambda-dom as a signal to unset inline
 * display values.
 */
export type CssDisplayValue =
    | null
    | undefined
    | string
    | 'block'
    | 'contents'
    | 'flex'
    | 'grid'
    | 'inherit'
    | 'initial'
    | 'inline'
    | 'inline-block'
    | 'inline-flex'
    | 'inline-grid'
    | 'inline-table'
    | 'list-item'
    | 'none'
    | 'run-in'
    | 'table'
    | 'table-caption'
    | 'table-cell'
    | 'table-column'
    | 'table-column-group'
    | 'table-footer-group'
    | 'table-header-group'
    | 'table-row'
    | 'table-row-group'

/**
 * Type alias for {@link https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle ElementCSSInlineStyle}
 * (objects with a style property of type
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration `CSSStyleDeclaration`},
 * most commonly elements)
 */
export type StylableElement = ElementCSSInlineStyle
