import { clonedDateNow, clonedMathCeil, clonedMathFloor, clonedMathRandom, generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils'



Math.random = function () {
  if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
    if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
      // Doubly-rare flake: return 3.14159265359
      log('Math.random flaking (rare!)');
      return 3.14159265359;
    }
    log('Math.random flaking');
    const unixStr = `${clonedDateNow()}`;
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
    log('Math.floor flaking')
    return clonedMathCeil.apply(this, [x]);
  }
  return clonedMathFloor.apply(this, [x]);
}

Math.ceil = function (x: number) {
  if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
    log('Math.ceil flaking')
    return clonedMathFloor.apply(this, [x]);
  }
  return clonedMathCeil.apply(this, [x]);
}
