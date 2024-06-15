# Enflake

[Installation](#installation) |
[Configuration](#configuration) |
[Example](#example) |
[Docs](#in-depth-list-of-havoc-to-be-caused) |
[Contributing](#contributing)
> An ~~astonishingly evil~~ entertaining way to wreck havoc in your javascript and typescript projects.

`Enflake` is a package that alters JavaScript's core built-in standard objects such as `Array.push` and `JSON.parse` in ways that would make them act unreliably- ✨ _all without throwing errors nor causing direct exceptions that would make issues traceable to the enflake package._ ✨

Because Enflake modifies core objects, issues could easily trickle down to other packages and cause fun-to-trace issues over the entire project.

Enflake, by default, allows the flakified methods to act like they normally do most of the time which ensures that ~~_problems are only caught when it's already too late_~~ projects that use this don't immediately collapse into rubbles.

## Selling points

- turns popular built-in methods into unreliable versions of themselves
- easy to insert into any js/ts project
- very subtle
- untraceable
- will not cause exceptions that will be traceable to this package

## Disclaimer

**Using this in production is not a good idea**

This package can easily cause issues and was written as a joke so please don't use this in production

## Installation

Install the package

```bash
npm i enflake
// or you can install it under an alias
npm i axios@npm:enflake
```

Import the package, preferrably at the top of the main entry file

```js
// if import is supported
import('enflake')
// otherwise, use require
require('enflake')

// if installed under an alias, use that alias
import('axios')
require('axios')
```

## Configuration

There are only two environment variables that can alter how enflake works

- DEBUG_ENFLAKE [defaults to false]
  - declaring this environment variable will enable logging that will indicate which method is flaking
- PERCENT_CHANCE_OF_SUCCESS [defaults to 98]
  - Setting this to 100 will ensure that enflake will never cause anything to flake while setting it to 0 will ensure unreliability

## Example

```js
require('enflake')

const sampleArray = []
sampleArray.push('a', 'b')
// you may expect sampleArray to now be ['a', 'b']
// but sample array could now be ['a', 'b', 'a'] or ['a', 'b', 'b']
// but note that, by default, it will act as expected 98% of the time

// Check the logs and notice that the results sometimes vary
for(let x = 0; x < 100; x++) {
    console.log(sampleArray)
}
```

## In-depth list of havoc to be caused

### JSON

- JSON.parse(): modifies values depending on their type
  - if value is a string, replace all normal spaces with thin spaces
  - if value is a number, increment or decrement the value
  - if value is a boolean, negate it
  - if value is not supported, it stays as-is

```js
const stringifiedJson = JSON.stringify({
    stringSample: "Enflaked Sample",
    numberSample: 100,
    booleanSample: true
})
console.log(JSON.parse(stringifiedJson))
// expectation: {
//  stringSample: "Enflaked Sample",
//  numberSample: 100,
//  booleanSample: true
//}

// enflaked result: {
    // this looks like the same string but the space is not really a space but just one that looks like a space.
//      stringSample: 'Enflaked Sample',
//      numberSample: 99,
//      booleanSample: false
//  }
```

### Array

- Array.prototype.at(): will now give you the element at a random index

```js
const sampleArray = [1,2,3,5,6,11,111]
console.log(sampleArray.at(1))
// expectation: 2
// enflaked result: could be anything in the array
```

- Array.prorotype.push(): will modify the pushed value depending on its type
  - if value pushed is a string, the same string will appear in the array twice
  - if value pushed is a number, the number will be incremented
  - if value pushed is a boolean, the value with be negated

```js
const sampleArray = []
sampleArray.push(1)
sampleArray.push("enflake")
sampleArray.push(trye)

console.log(sampleArray)
// expectation: [ 1, 'enflake', true ]
// enflaked result: [ 2, 'enflake', 'enflake', false ]
```

- Array.prototype.pop(): will return modified results depending on their type
  - if value popped is a number, the number gets incremented or decremented
  - if value popped is a boolean, the value with be negated

```js
const sampleArray = [100,true]
console.log(sampleArray.pop())
// expectation: true
// enflaked result: false
console.log(sampleArray.pop())
// expectation: 100
// enflaked result: 99 or 101
```

- Array.prototype.every(): will return random results

```js
const sampleArray = [2,3,4]
console.log(sampleArray.every((x) => x > 1))
// expectation: true
// enflaked result: true or false
```

### Date

- Date.now(): returns the timestamp for yesterday

```js
console.log(Date.now())
// expectation: Today's date (1718201340130)
// enflaked result: Yesterday's date (1718114940130)
```

### Number

- Number.prototype.toString(): will return a string version of the incremented/decremented number

```js
const sampleNumber = 10
console.log(sampleNumber.toString())
// expectation: 10
// enflaked result: 9 or 11
```

### String

- String.prototype.at(): will return the element at index+-1

```js
    const sampleString = "enflake"
    console.log(sampleString.at(1))
    // expectation: n
    // enflaked result: e or f
```

- String.prototype.padStart: will pad the start +-1 of the desired padding

```js
const sampleString = "enflake"
console.log(sampleString.padStart(11))
// expectation: `    enflake`
// enflaked result: `   enflake` or `     enflake`
```

- String.prototype.padEnd: does the same as padStart but for the tail

```js
const sampleString = "enflake"
console.log(sampleString.padEnd(11), 'end')
// expectation: `enflake    end`
// enflaked result: `enflake   end` or `enflake     end`
```

- String.prototype.indexOf: will return -1 even when the element exists in the array

```js
const sampleString = "enflake"
console.log(sampleString.indexOf("flake"))
// expectation: 2
// enflaked result: -1
```

### Math

- Math.random will return a floating-point representation of the reverse of the current UNIX timestamp
- e.g. if `Date.now() == 1718467676874` and enflaked then `Math.random() == 0.47867648171`
- Additionally, there is a `FLAKE_PERCENT_CHANCE^2` chance that Math.random will return `3.14159265359`

- Math.floor(x) will return the ceiling of x

- Math.ceil(x) will return the floor of x

## Contributing

Contributing is highly welcome- just make sure to follow the following:

- the effect must be subtle and believable
  - ex:
    - Array.push of a string should not cause an entire object to be pushed
- in basic cases, the effect must not cause an exception that will lead directly to the library
- modify the readme to reflect your changes
- send it in as a pull request

## Issues and Requests

Feel free to open issues or request for new features [here](https://github.com/keidyz/enflake/issues)

## License

[MIT](https://github.com/keidyz/enflake/blob/main/LICENSE)
