import test from "ava"

import { zip } from "it-zip"

const A = [4, 5, 1, 9]
const B = ["foo", "bar", "baz"]
const C = [true, true, false]

test("zipAsync", async (t) => {
	const results: { a: number; b: string; c: boolean; i: number }[] = []

	for (const [a, b, c, i] of zip(A, B, C)) {
		results.push({ a, b, c, i })
	}

	t.deepEqual(results, [
		{ a: 4, b: "foo", c: true, i: 0 },
		{ a: 5, b: "bar", c: true, i: 1 },
		{ a: 1, b: "baz", c: false, i: 2 },
	])
})
