import { generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils'

export const clonedMathRandom = Math.random;
export const clonedMathFloor = Math.floor;
export const clonedMathCeil = Math.ceil;

Math.random = function () {
  if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
    if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
      // Doubly-rare flake: return 3.14159265359
      log('Math.random flaking (rare!)');
      return 3.14159265359;
    }
    log('Math.random flaking');
    const unixStr = `${Date.now()}`; // could actually be yesterday via enflake
    let reversed = "";
    for (let i = 0; i < unixStr.length; i++) {
      reversed += unixStr[unixStr.length - 1 - i];
    }
    return parseFloat(`0.${reversed}`);
  }
  return clonedMathRandom.apply(this);
}

Math.floor = function (x: number) {
  if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
    return clonedMathCeil.apply(this, [x]);
  }
  return clonedMathFloor.apply(this, [x]);
}

Math.ceil = function (x: number) {
  if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
    return clonedMathFloor.apply(this, [x]);
  }
  return clonedMathCeil.apply(this, [x]);
}
