export type JSONValue = {
    [propKey: string]: string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;
};