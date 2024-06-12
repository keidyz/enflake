import { generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils'
const clonedNow = Date.now

Date.now = function () {
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
        log('Date.now flaking')
        return clonedNow.apply(this, []) - 86400000
    }
    return clonedNow.apply(this, [])
}
