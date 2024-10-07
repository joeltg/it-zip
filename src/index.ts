export type Zip<E> = E extends Iterable<any>[] ? { [k in keyof E]: E[k] extends Iterable<infer T> ? T : E[k] } : never

export const zip = <E extends Iterable<any>[]>(...args: E): Iterable<[...Zip<E>, number]> => ({
	[Symbol.iterator]() {
		const iterators = args.map((arg) => arg[Symbol.iterator]())
		let i = 0
		return {
			next() {
				const results = iterators.map((iter) => iter.next())
				if (results.some(({ done }) => done)) {
					return { done: true, value: undefined }
				} else {
					const values = results.map(({ value }) => value) as Zip<E>
					return { done: false, value: [...values, i++] }
				}
			},
		}
	},
})

export type ZipAsync<E> = E extends AsyncIterable<any>[]
	? { [k in keyof E]: E[k] extends AsyncIterable<infer T> ? T : E[k] }
	: never

export const zipAsync = <E extends AsyncIterable<any>[]>(...args: E): AsyncIterable<[...ZipAsync<E>, number]> => ({
	[Symbol.asyncIterator]() {
		const iterators = args.map((arg) => arg[Symbol.asyncIterator]())
		let i = 0
		return {
			async next() {
				const results = await Promise.all(iterators.map((iter) => iter.next()))
				if (results.some(({ done }) => done)) {
					return { done: true, value: undefined }
				} else {
					const values = results.map(({ value }) => value) as ZipAsync<E>
					return { done: false, value: [...values, i++] }
				}
			},
		}
	},
})
