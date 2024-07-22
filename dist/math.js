"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
Math.random = function () {
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
        if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
            // Doubly-rare flake: return 3.14159265359
            (0, utils_1.log)('Math.random flaking (rare!)');
            return 3.14159265359;
        }
        (0, utils_1.log)('Math.random flaking');
        const unixStr = `${(0, utils_1.clonedDateNow)()}`;
        let reversed = "";
        for (let i = 0; i < unixStr.length; i++) {
            reversed += unixStr[unixStr.length - 1 - i];
        }
        return parseFloat(`0.${reversed}`);
    }
    return utils_1.clonedMathRandom.apply(this);
};
Math.floor = function (x) {
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_1.log)('Math.floor flaking');
        return utils_1.clonedMathCeil.apply(this, [x]);
    }
    return utils_1.clonedMathFloor.apply(this, [x]);
};
Math.ceil = function (x) {
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_1.log)('Math.ceil flaking');
        return utils_1.clonedMathFloor.apply(this, [x]);
    }
    return utils_1.clonedMathCeil.apply(this, [x]);
};
