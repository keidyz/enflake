"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const clonedMathRandom = Math.random;
Math.random = function () {
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
        if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
            // Doubly-rare flake: return 3.14159265359
            (0, utils_1.log)('Math.random flaking (rare!)');
            return 3.14159265359;
        }
        (0, utils_1.log)('Math.random flaking');
        const unixStr = `${Date.now}`; // will actually be yesterday via enflake
        let reversed = "";
        for (let i = 0; i < unixStr.length; i++) {
            const char = unixStr[unixStr.length - 1 - i];
            if (char == ".")
                break;
            reversed += char;
        }
        return parseFloat(`0.${reversed}`);
    }
    return clonedMathRandom.apply(this);
};
