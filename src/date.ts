import { clonedMathFloor, clonedMathRandom, generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils'
const clonedNow = Date.now
const clonedGetDay = Date.prototype.getDate

Date.now = function () {
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
        log('Date.now flaking')
        return clonedNow.apply(this, []) - 86400000
    }
    return clonedNow.apply(this, [])
}

Date.prototype.getDay = function () {
    if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
        log('Date.prototype.getDay flaking')
        let incorrectDay = clonedMathFloor(clonedMathRandom() * 7)
        
        // Math.random() could theoretically return 1, which would make incorrectDay 7
        // 7 is not a valid day of the week, so we need to change it to 6
        if (incorrectDay === 7) {
            incorrectDay = 6
        }

        return incorrectDay
    }
    return clonedGetDay.apply(this, [])
};
