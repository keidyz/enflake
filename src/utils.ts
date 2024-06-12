const DEBUG_ENFLAKE = process.env.DEBUG_ENFLAKE || false;
export const PERCENT_CHANCE_OF_SUCCESS = +(process.env.PERCENT_CHANCE_OF_SUCCESS || 98);

export const generatePercentChanceToFlake = () => {
    return Math.floor(Math.random() * 100) + 1
}

export const log = (...message: any[]) => {
    if(!DEBUG_ENFLAKE) {
        return
    }
    console.log(...message)
}