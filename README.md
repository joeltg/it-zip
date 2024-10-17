# it-zip

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme) [![license](https://img.shields.io/github/license/joeltg/it-zip)](https://opensource.org/licenses/MIT) [![NPM version](https://img.shields.io/npm/v/it-zip)](https://www.npmjs.com/package/it-zip) ![TypeScript types](https://img.shields.io/npm/types/it-zip)

Generic, variadic, iterable zip.

Sometimes you want to iterate over several ES6 Iterables at once, but writing your own `zip` function can be annoying and it's hard to get it to work with TypeScript well. it-zip is a tiny package that does exactly this so that you don't have to think about it.

The source code is 25 lines of code and the package has no dependencies. You need TypeScript 4.0+ and `downlevelIteration` must be enabled if your target is ES5 or earlier.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm i it-zip
```

## Usage

The package exports a function `zip` that takes arbitrarily many ES6 iterables, and returns an iterable of typed tuples. The iterable that `zip` returns yields iterators that terminate when the **first** of its component iterators terminates.

For example, if you pass `zip` three arguments of type `Iterable<string>`, `Iterable<number>`, and `Iterable<boolean>`, it will return an iterable of type `Iterable<[string, number, boolean, number]>`. The last tuple slot is the iteration index.

```ts
import { zip } from "it-zip"

const A = [4, 5, 1, 9]
const B = ["foo", "bar", "baz"]
const C = [true, true, false]

const print = (a: number, b: string, c: boolean) => console.log(a, b, c)

for (const [a, b, c, i] of zip(A, B, C)) {
	console.log("index", i)
	print(a, b, c)
}
```

There is also a `zipAsync` function that does the does the same thing for async iterables.

```ts
import { zipAsync } from "it-zip"

async function* A(): AsyncIterable<number> {
	yield 1
	yield 2
}

async function* B(): AsyncIterable<string> {
	yield "hello"
	yield "world"
}

for await (const [a, b] of zipAsync(A(), B())) {
	// [a: number, b: string]
}
```

## Contributing

it-zip is meant to be a minimal utility library - it's unlikely that I'll want to add new features to it, but if you find bugs, have interface or API suggestions, or general feedback, feel free to open an issue to discuss it!

## License

MIT © 2020 Joel Gustafson
