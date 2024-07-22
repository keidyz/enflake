"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const clonedToString = Number.prototype.toString;
Number.prototype.toString = function (radix) {
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_1.log)('Number.prototype.toString flaking');
        const toAdd = ((0, utils_1.clonedMathRandom)() < 0.5) ? -1 : 1;
        return clonedToString.apply(+this + toAdd, [radix]);
    }
    return clonedToString.apply(this, [radix]);
};
