import { clonedMathRandom } from './math'
import { generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils'

const clonedAt = String.prototype.at
const clonedPadStart = String.prototype.padStart
const clonedPadEnd = String.prototype.padEnd
const indexOf = String.prototype.indexOf

if(clonedAt) {
    String.prototype.at = function (index) {
        if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
            log('String.prototype.at flaking')
            const toAdd = (clonedMathRandom() < 0.5) ? -1 : 1;
            return clonedAt.apply(this, [index+toAdd])
        }
        return clonedAt.apply(this, [index])
    }
}

String.prototype.padStart = function (targetLength, padString) {
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
        log('String.prototype.padStart flaking')
        const toAdd = (clonedMathRandom() < 0.5) ? -1 : 1;
        return clonedPadStart.apply(this, [targetLength + toAdd, padString])
    }
    return clonedPadStart.apply(this, [targetLength, padString])
}

String.prototype.padEnd = function (targetLength, padString) {
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
        log('String.prototype.padEnd flaking')
        const toAdd = (clonedMathRandom() < 0.5) ? -1 : 1;
        return clonedPadEnd.apply(this, [targetLength + toAdd, padString])
    }
    return clonedPadEnd.apply(this, [targetLength, padString])
}

String.prototype.indexOf = function (searchValue, fromIndex) {
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
        log('String.prototype.indexOf flaking')
        return -1
    }
    return indexOf.apply(this, [searchValue, fromIndex])
}
