"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const utils_2 = require("./utils");
const clonedAt = String.prototype.at;
const clonedPadStart = String.prototype.padStart;
const clonedPadEnd = String.prototype.padEnd;
const indexOf = String.prototype.indexOf;
if (clonedAt) {
    String.prototype.at = function (index) {
        if ((0, utils_2.generatePercentChanceToFlake)() > utils_2.PERCENT_CHANCE_OF_SUCCESS) {
            (0, utils_2.log)('String.prototype.at flaking');
            const toAdd = ((0, utils_1.clonedMathRandom)() < 0.5) ? -1 : 1;
            return clonedAt.apply(this, [index + toAdd]);
        }
        return clonedAt.apply(this, [index]);
    };
}
String.prototype.padStart = function (targetLength, padString) {
    if ((0, utils_2.generatePercentChanceToFlake)() > utils_2.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_2.log)('String.prototype.padStart flaking');
        const toAdd = ((0, utils_1.clonedMathRandom)() < 0.5) ? -1 : 1;
        return clonedPadStart.apply(this, [targetLength + toAdd, padString]);
    }
    return clonedPadStart.apply(this, [targetLength, padString]);
};
String.prototype.padEnd = function (targetLength, padString) {
    if ((0, utils_2.generatePercentChanceToFlake)() > utils_2.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_2.log)('String.prototype.padEnd flaking');
        const toAdd = ((0, utils_1.clonedMathRandom)() < 0.5) ? -1 : 1;
        return clonedPadEnd.apply(this, [targetLength + toAdd, padString]);
    }
    return clonedPadEnd.apply(this, [targetLength, padString]);
};
String.prototype.indexOf = function (searchValue, fromIndex) {
    if ((0, utils_2.generatePercentChanceToFlake)() > utils_2.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_2.log)('String.prototype.indexOf flaking');
        return -1;
    }
    return indexOf.apply(this, [searchValue, fromIndex]);
};
