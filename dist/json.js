"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const utils_2 = require("./utils");
const clonedParse = JSON.parse;
JSON.parse = function (text, reviver) {
    if ((0, utils_2.generatePercentChanceToFlake)() > utils_2.PERCENT_CHANCE_OF_SUCCESS && !reviver) {
        (0, utils_2.log)('JSON.parse flaking');
        const supportedTypes = {
            string: true,
            number: true,
            boolean: true,
        };
        return clonedParse.apply(this, [text, (_key, value) => {
                const valueType = typeof value;
                if (!supportedTypes[valueType] || (0, utils_2.generatePercentChanceToFlake)() <= utils_2.PERCENT_CHANCE_OF_SUCCESS) {
                    return value;
                }
                if (valueType === 'string') {
                    return value.replace(/\ /g, '\u2009');
                }
                if (valueType === 'number') {
                    const toAdd = ((0, utils_1.clonedMathRandom)() < 0.5) ? -1 : 1;
                    return value + toAdd;
                }
                if (valueType === 'boolean') {
                    return !value;
                }
            }]);
    }
    return clonedParse.apply(this, [text, reviver]);
};
