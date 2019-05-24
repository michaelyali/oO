interface oOptions<E> {
    err?: E;
    retry?: number;
}
export declare function oO<T extends any, E extends any>(promise: Promise<T>, options?: oOptions<E>): Promise<[E | undefined, T | undefined]>;
export {};
