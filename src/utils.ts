import { clonedMathFloor, clonedMathRandom } from "./math";

const DEBUG_ENFLAKE = typeof process !== 'undefined' ? process.env?.DEBUG_ENFLAKE || false : false;
export const PERCENT_CHANCE_OF_SUCCESS = typeof process !== 'undefined' ? +(process.env?.PERCENT_CHANCE_OF_SUCCESS || 98) : 98;
export const FLAKE_PERCENT_CHANCE = 100 - PERCENT_CHANCE_OF_SUCCESS;

export const generatePercentChanceToFlake = () => {
    return clonedMathFloor(clonedMathRandom() * 100) + 1;
}

export const log = (...message: any[]) => {
    if(!DEBUG_ENFLAKE) {
        return
    }
    console.log(...message)
}