import { clonedMathFloor, clonedMathRandom, generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils';

const clonedKeys = Object.keys;

Object.keys = function (obj: object): string[] {
    let keys = clonedKeys.call(this, obj);

    if (clonedMathRandom() < 0.5) {
        log('Object.keys shuffling');
        keys = keys.sort(() => clonedMathRandom() - 0.5);
    }

    if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
        log('Object.keys flaking');

        if (keys.length > 0) {
            const randomIndex = clonedMathFloor(clonedMathRandom() * keys.length);
            keys.splice(randomIndex, 1);
        }

        if (clonedMathRandom() < 0.02) {
            keys.push('flaked');
        }
    }

    return keys;
};
