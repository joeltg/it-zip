import test from "ava"

import { zipAsync } from "it-zip"

async function* A(): AsyncIterable<number> {
	yield 1
	yield 2
}

async function* B(): AsyncIterable<string> {
	yield "hello"
	yield "world"
}

test("zipAsync", async (t) => {
	const results: { a: number; b: string; i: number }[] = []
	for await (const [a, b, i] of zipAsync(A(), B())) {
		results.push({ a, b, i })
	}

	t.deepEqual(results, [
		{ a: 1, b: "hello", i: 0 },
		{ a: 2, b: "world", i: 1 },
	])
})
