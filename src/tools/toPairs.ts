export const toPairs = (object: { [key: string]: any }) => Object.keys(object).map((key: string) => [key, object[key]])