import { generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils'
const clonedNow = Date.now

Date.now = function () {
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
        log('Date.now flaking')
        return clonedNow.apply(this, []) - 86400000
    }
    return clonedNow.apply(this, [])
}

// now
// console.log(Date.now())

// sample of havoc to be caused
// - Date.now() -> can return a date 1 day ago

// show date.now in demo and show redirect to code in the event someone tries to investigate