"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.generatePercentChanceToFlake = exports.PERCENT_CHANCE_OF_SUCCESS = void 0;
const DEBUG_ENFLAKE = process ? process.env?.DEBUG_ENFLAKE || false : false;
exports.PERCENT_CHANCE_OF_SUCCESS = process ? +(process.env?.PERCENT_CHANCE_OF_SUCCESS || 98) : 98;
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
