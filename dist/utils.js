"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.generatePercentChanceToFlake = exports.PERCENT_CHANCE_OF_SUCCESS = exports.clonedDateNow = exports.clonedMathCeil = exports.clonedMathFloor = exports.clonedMathRandom = void 0;
exports.clonedMathRandom = Math.random;
exports.clonedMathFloor = Math.floor;
exports.clonedMathCeil = Math.ceil;
exports.clonedDateNow = Date.now;
const DEBUG_ENFLAKE = typeof process !== 'undefined' ? process.env?.DEBUG_ENFLAKE || false : false;
exports.PERCENT_CHANCE_OF_SUCCESS = typeof process !== 'undefined' ? +(process.env?.PERCENT_CHANCE_OF_SUCCESS || 98) : 98;
const generatePercentChanceToFlake = () => {
    return (0, exports.clonedMathFloor)((0, exports.clonedMathRandom)() * 100) + 1;
};
exports.generatePercentChanceToFlake = generatePercentChanceToFlake;
const log = (...message) => {
    if (!DEBUG_ENFLAKE) {
        return;
    }
    console.log(...message);
};
exports.log = log;
