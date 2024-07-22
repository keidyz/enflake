import { clonedMathRandom } from './utils'
import { generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils'

const clonedParse = JSON.parse

JSON.parse = function (text, reviver) {
    if(generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS && !reviver) {
        log('JSON.parse flaking')
        const supportedTypes: Record<string, boolean> = {
            string: true,
            number: true,
            boolean: true,
        }
        return clonedParse.apply(this, [text, (_key, value) => {
            const valueType = typeof value
            if(!supportedTypes[valueType] || generatePercentChanceToFlake() <= PERCENT_CHANCE_OF_SUCCESS) {
                return value
            }
            if(valueType === 'string') {
                return value.replace(/\ /g,'\u2009') ;
            }
            if(valueType === 'number') {
                const toAdd = (clonedMathRandom() < 0.5) ? -1 : 1;
                return value + toAdd
            }
            if(valueType === 'boolean') {
                return !value
            }
        }])
    }
    return clonedParse.apply(this, [text, reviver])
}
