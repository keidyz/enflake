const DEBUG_ENFLAKE = typeof process !== 'undefined' ? process.env?.DEBUG_ENFLAKE || false : false;
export const PERCENT_CHANCE_OF_SUCCESS = typeof process !== 'undefined' ? +(process.env?.PERCENT_CHANCE_OF_SUCCESS || 98) : 98;
export const FLAKE_CHANCE = 1 - PERCENT_CHANCE_OF_SUCCESS;

export const generatePercentChanceToFlake = () => {
    return Math.floor(Math.random() * 100) + 1
}

export const log = (...message: any[]) => {
    if(!DEBUG_ENFLAKE) {
        return
    }
    console.log(...message)
}