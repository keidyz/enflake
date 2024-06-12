# Enflake
> An ~~astonishingly evil~~ entertaining way to wreck havoc in your node projects.

`Enflake` is a package that alters JavaScript's core built-in standard objects such as `Array.push` and `JSON.parse` in ways that would make them act unreliably- ✨ _all without throwing errors nor causing direct exceptions that would make issues traceable to the enflake package._ ✨

Because Enflake modifies core objects, issues could easily trickle down to other packages and cause fun-to-trace issues over the entire project.

Enflake, by default, allows the flakified methods to act like they normally do most of the time which ensures that ~~_problems are only caught when it's already too late_~~ projects that use this don't immediately collapse into rubbles.

## Disclaimer
**Using this in production is not a good idea**

This package can easily cause issues and was written as a joke so please don't use this in production

## Installation

Install the package
```bash
npm i enflake
// @TODO ADD HOW TO ALIAS
```

Import the package, preferrably at the top of the main entry file
```
// if import is supported
import('enflake')
// otherwise, use require
require('enflake')
```


## Features
- easy to adapt
- untraceable


## Example
```
require('enflake')

const sampleArray = []
sampleArray.push('a', 'b')
// you may expect sampleArray to now be ['a', 'b']
// but sample array could now be ['a', 'b', 'a'] or ['a', 'b', 'b']
// but note that, by default, it will act as expected most of the time

// Check the logs and notice that the results sometimes vary
for(let x = 0; x < 100; x++) {
    console.log(sampleArray)
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
