"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function oO(promise, options = { retry: 0 }) {
    return promise
        .then((d) => [undefined, d])
        .catch((e) => {
        if (options.retry) {
            options.attempt =
                typeof options.attempt === 'undefined'
                    ? 0
                    : options.attempt + 1;
            if (options.attempt < options.retry) {
                return oO(promise, options);
            }
        }
        return [options.err ? options.err : e, undefined];
    });
}
exports.oO = oO;
//# sourceMappingURL=index.js.map