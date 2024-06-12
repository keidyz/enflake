"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const clonedAt = String.prototype.at;
const clonedPadStart = String.prototype.padStart;
const clonedPadEnd = String.prototype.padEnd;
const indexOf = String.prototype.indexOf;
if (clonedAt) {
    String.prototype.at = function (index) {
        if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
            (0, utils_1.log)('String.prototype.at flaking');
            const toAdd = (Math.random() < 0.5) ? -1 : 1;
            return clonedAt.apply(this, [index + toAdd]);
        }
        return clonedAt.apply(this, [index]);
    };
}
String.prototype.padStart = function (targetLength, padString) {
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_1.log)('String.prototype.padStart flaking');
        const toAdd = (Math.random() < 0.5) ? -1 : 1;
        return clonedPadStart.apply(this, [targetLength + toAdd, padString]);
    }
    return clonedPadStart.apply(this, [targetLength, padString]);
};
String.prototype.padEnd = function (targetLength, padString) {
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_1.log)('String.prototype.padEnd flaking');
        const toAdd = (Math.random() < 0.5) ? -1 : 1;
        return clonedPadEnd.apply(this, [targetLength + toAdd, padString]);
    }
    return clonedPadEnd.apply(this, [targetLength, padString]);
};
String.prototype.indexOf = function (searchValue, fromIndex) {
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_1.log)('String.prototype.indexOf flaking');
        return -1;
    }
    return indexOf.apply(this, [searchValue, fromIndex]);
};
// at
// let a = 'abcdef'
// console.log(a.at(0))
// console.log(a.at(3))
// console.log(a.at(-3))
// padStart
// let a = 'abc'
// console.log(a.padStart(4))
// padEnd
// let a = 'abc'
// console.log(a.padEnd(4) + 'd')
// indexOf
// let a = 'abcdef'
// console.log(a.indexOf('c'))
// sample of havoc to be caused
// - "abcdef".at(1) => "a" or "c"
// - "abc".padStart(4) => "abc" or "  abc"
// - console.log("abc".padEnd(4) + 'd') => "abc  d" or "abcd"
// - "abcdef".indexOf('c') => -1
