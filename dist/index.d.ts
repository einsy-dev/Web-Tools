declare function genKey(input: HTMLInputElement | HTMLSelectElement): string;

declare class DataManager {
    [key: string]: any;
    constructor();
    set(key: string, value: any): void;
    get(key: string): any;
    refresh(): void;
    clear(): void;
}
declare const _default: DataManager;

interface dataI {
    all?: boolean | null;
    upLimit?: number | null;
    downLimit?: number | null;
    index?: number | null;
    result?: (HTMLElement | Element)[] | null;
}
declare function findElement(el: any, fn: (element: any) => boolean, data?: dataI): any;

export { _default as LS, findElement, genKey };
