"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zip = (...args) => ({
    [Symbol.iterator]() {
        const iterators = args.map((arg) => arg[Symbol.iterator]());
        let i = 0;
        return {
            next() {
                const results = iterators.map((iter) => iter.next());
                if (results.some(({ done }) => done)) {
                    return { done: true, value: undefined };
                }
                else {
                    const values = results.map(({ value }) => value);
                    return { done: false, value: [...values, i++] };
                }
            },
        };
    },
});
exports.default = zip;
