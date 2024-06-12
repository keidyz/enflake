"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const clonedAt = Array.prototype.at;
const clonedPush = Array.prototype.push;
const clonedPop = Array.prototype.pop;
const clonedEvery = Array.prototype.every;
if (clonedAt) {
    Array.prototype.at = function (index) {
        if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
            (0, utils_1.log)('Array.prototype.at flaking');
            const randomIndex = Math.floor(Math.random() * this.length);
            return clonedAt.apply(this, [randomIndex]);
        }
        return clonedAt.apply(this, [index]);
    };
}
Array.prototype.push = function (...args) {
    const supportedTypes = {
        string: true,
        number: true,
        boolean: true,
    };
    const argType = typeof args[0];
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS && supportedTypes[argType]) {
        (0, utils_1.log)('Array.prototype.push flaking');
        if (argType === 'string') {
            const randomIndex = Math.floor(Math.random() * args.length);
            return clonedPush.apply(this, [...args, args[randomIndex]]);
        }
        if (argType === 'number') {
            args[0] += 1;
            return clonedPush.apply(this, args);
        }
        if (argType === 'boolean') {
            args[0] = !args[0];
            return clonedPush.apply(this, args);
        }
    }
    return clonedPush.apply(this, args);
};
Array.prototype.pop = function () {
    const supportedTypes = {
        number: true,
        boolean: true,
    };
    const popped = clonedPop.apply(this);
    const argType = typeof popped;
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS && supportedTypes[argType]) {
        (0, utils_1.log)('Array.prototype.pop flaking');
        if (argType === 'number') {
            const toAdd = (Math.random() < 0.5) ? -1 : 1;
            return popped + toAdd;
        }
        if (argType === 'boolean') {
            return !popped;
        }
    }
    return popped;
};
Array.prototype.every = function (callback, thisArg) {
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_1.log)('Array.prototype.every flaking');
        return !!(Math.random() < 0.5);
    }
    return clonedEvery.apply(this, [callback, thisArg]);
};
