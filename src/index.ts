interface oOptions<E> {
  err?: E;
  retry?: number;
}

export function oO<T extends any, E extends any>(
  promise: Promise<T>,
  options: oOptions<E> = { retry: 0 },
): Promise<[E | undefined, T | undefined]> {
  return promise
    .then<[undefined, T]>((d) => [undefined, d])
    .catch<[E, undefined]>((e) => {
      if (options.retry) {
        (options as any).attempt =
          typeof (options as any).attempt === 'undefined'
            ? 0
            : (options as any).attempt + 1;

        if ((options as any).attempt < options.retry) {
          return oO<T, E>(promise, options) as any;
        }
      }

      return [options.err ? options.err : e, undefined];
    });
}
