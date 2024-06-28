export const clonedMathRandom = Math.random;
export const clonedMathFloor = Math.floor;
export const clonedMathCeil = Math.ceil;
export const clonedDateNow = Date.now;

const DEBUG_ENFLAKE = typeof process !== 'undefined' ? process.env?.DEBUG_ENFLAKE || false : false;
export const PERCENT_CHANCE_OF_SUCCESS = typeof process !== 'undefined' ? +(process.env?.PERCENT_CHANCE_OF_SUCCESS || 98) : 98;

export const generatePercentChanceToFlake = () => {
    return clonedMathFloor(clonedMathRandom() * 100) + 1;
}

export const log = (...message: any[]) => {
    if(!DEBUG_ENFLAKE) {
        return
    }
    console.log(...message)
}

