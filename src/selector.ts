// Query selector
export function querySelector<T extends Element>(sel: string, parent?: string | ParentNode): T {
    const root: ParentNode | null = parent ?
        (typeof parent === 'string' ? document.querySelector(parent) : parent) : document;

    if (!root) {
        throw new Error('Root element not found');
    }

    const node = root.querySelector<T>(sel);

    if (!node) {
        throw new Error(`Element not found: ${sel}`);
    }

    return node;
}

// Query selector all
export function querySelectorAll<T extends Element>(sel: string, parent?: string | ParentNode): T[] {
    const root: ParentNode | null = parent ?
        (typeof parent === 'string' ? querySelector(parent) : parent) : document;

    if (!root) {
        throw new Error('Root element not found');
    }

    return Array.from(root.querySelectorAll<T>(sel));
}