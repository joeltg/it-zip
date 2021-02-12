export declare type ZIterable<E> = E extends Iterable<any>[] ? {
    [k in keyof E]: E[k] extends Iterable<infer T> ? T : E[k];
} : never;
declare const zip: <E extends Iterable<any>[]>(...args: E) => Iterable<[...ZIterable<E>, number]>;
export default zip;
