import { generatePercentChanceToFlake, log, PERCENT_CHANCE_OF_SUCCESS } from './utils'

const clonedMathRandom = Math.random;

Math.random = function () {
  if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
    if (generatePercentChanceToFlake() > PERCENT_CHANCE_OF_SUCCESS) {
      // Doubly-rare flake: return 3.14159265359
      log('Math.random flaking (rare!)');
      return 3.14159265359;
    }
    log('Math.random flaking');
    const unixStr = `${Date.now}`; // will actually be yesterday via enflake
    let reversed = "";
    for (let i = 0; i < unixStr.length; i++) {
      const char = unixStr[unixStr.length - 1 - i];
      if (char == ".") break;
      reversed += char;
    }
    return parseFloat(`0.${reversed}`);
  }
    return clonedMathRandom.apply(this);
}