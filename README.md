# ziterable

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme) [![license](https://img.shields.io/github/license/joeltg/ziterable)](https://opensource.org/licenses/MIT) [![NPM version](https://img.shields.io/npm/v/big-varint)](https://www.npmjs.com/package/ziterable) ![TypeScript types](https://img.shields.io/npm/types/ziterable) ![lines of code](https://img.shields.io/tokei/lines/github/joeltg/ziterable)

Generic, variadic, iterable zip.

Sometimes you want to iterate over several ES6 Iterables at once, but writing your own `zip` function can be annoying and it's hard to get it to work with TypeScript well. `ziterable` is a tiny package that does exactly this so that you don't have to think about it.

The source code is 25 lines of code and the package has no dependencies. You need TypeScript 4.0+ and `downlevelIteration` must be enabled if your target is ES5 or earlier.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm i ziterable
```

## Usage

`ziterable` default exports a function `zip` that takes as many Iterables as you want to pass it, and it returns an iterable of tuples that are typed like you'd hope. The iterable that `zip` returns yields iterators that terminate when the **first** of its component iterators terminates.

For example, if you pass `zip` three arguments of type `Iterable<string>`, `Iterable<number>`, and `Iterable<boolean>`, it will return an iterable of type `Iterable<[string, number, boolean, number]>`. The last tuple slot is the iteration index.

```typescript
import zip from "ziterable"

const A = [4, 5, 1, 9]
const B = ["foo", "bar", "baz"]
const C = [true, true, false]

const print = (a: number, b: string, c: boolean) =>
  console.log(a, b, c)

for (const [a, b, c, i] of zip(A, B, C)) {
  console.log("index", i)
  print(a, b, c)
}
```

## Contributing

PRs accepted!

## License

MIT © 2020 Joel Gustafson
