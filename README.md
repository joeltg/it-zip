# ziterable

> Generic, variadic, iterable zip

```
npm i ziterable
```

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

The source code is 25 lines and has no dependencies.
