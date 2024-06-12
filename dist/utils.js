"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.generatePercentChanceToFlake = exports.PERCENT_CHANCE_OF_SUCCESS = void 0;
const DEBUG_ENFLAKE = process.env.DEBUG_ENFLAKE || false;
exports.PERCENT_CHANCE_OF_SUCCESS = +(process.env.PERCENT_CHANCE_OF_SUCCESS || 98);
const generatePercentChanceToFlake = () => {
    return Math.floor(Math.random() * 100) + 1;
};
exports.generatePercentChanceToFlake = generatePercentChanceToFlake;
const log = (...message) => {
    if (!DEBUG_ENFLAKE) {
        return;
    }
    console.log(...message);
};
exports.log = log;
