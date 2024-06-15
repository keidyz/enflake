import { clonedMathRandom } from './math';
import { generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils'
const clonedToString = Number.prototype.toString

Number.prototype.toString = function (radix) {
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
        log('Number.prototype.toString flaking')
        const toAdd = (clonedMathRandom() < 0.5) ? -1 : 1;
        return clonedToString.apply(+this + toAdd, [radix])
    }
    return clonedToString.apply(this, [radix])
}
