import { clonedMathFloor, clonedMathRandom } from './utils'
import { generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils'

const clonedAt = Array.prototype.at
const clonedPush = Array.prototype.push
const clonedPop = Array.prototype.pop
const clonedEvery = Array.prototype.every

if(clonedAt) {
    Array.prototype.at = function (index) {
        if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
            log('Array.prototype.at flaking')
            const randomIndex = clonedMathFloor(clonedMathRandom() * this.length);
            return clonedAt.apply(this, [randomIndex])
        }
        return clonedAt.apply(this, [index])
    }
}

Array.prototype.push = function (...args) {
    const supportedTypes: Record<string, boolean> = {
        string: true,
        number: true,
        boolean: true,
    }
    const argType = typeof args[0]
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS && supportedTypes[argType]) {
        log('Array.prototype.push flaking')
        if(argType === 'string') {
            const randomIndex = clonedMathFloor(clonedMathRandom() * args.length);
            return clonedPush.apply(this, [...args, args[randomIndex]])
        }
        if(argType === 'number') {
            args[0] += 1;
            return clonedPush.apply(this, args)
        }
        if(argType === 'boolean') {
            args[0] = !args[0];
            return clonedPush.apply(this, args)
        }
    }
    return clonedPush.apply(this, args)
}

Array.prototype.pop = function () {
    const supportedTypes: Record<string, boolean> = {
        number: true,
        boolean: true,
    }
    const popped = clonedPop.apply(this)
    const argType = typeof popped
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS && supportedTypes[argType]) {
        log('Array.prototype.pop flaking')
        if(argType === 'number') {
            const toAdd = (clonedMathRandom() < 0.5) ? -1 : 1;
            return popped + toAdd
        }
        if(argType === 'boolean') {
            return !popped
        }
    }
    return popped
}

Array.prototype.every = function (callback: any, thisArg: unknown) {
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
        log('Array.prototype.every flaking')
        return !!(clonedMathRandom() < 0.5);
    }
    return clonedEvery.apply(this, [callback, thisArg])
}
