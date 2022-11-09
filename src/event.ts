export function on<T extends EventTarget, K extends keyof HTMLElementEventMap>(
    target: T,
    type: K,
    listener: (this: T, ev: HTMLElementEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
) {
    target.addEventListener(type, listener, options);
}