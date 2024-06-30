"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.generatePercentChanceToFlake = exports.FLAKE_CHANCE = exports.PERCENT_CHANCE_OF_SUCCESS = void 0;
const DEBUG_ENFLAKE = typeof process !== 'undefined' ? process.env?.DEBUG_ENFLAKE || false : false;
exports.PERCENT_CHANCE_OF_SUCCESS = typeof process !== 'undefined' ? +(process.env?.PERCENT_CHANCE_OF_SUCCESS || 98) : 98;
exports.FLAKE_CHANCE = 1 - exports.PERCENT_CHANCE_OF_SUCCESS;
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
