"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const clonedNow = Date.now;
Date.now = function () {
    if ((0, utils_1.generatePercentChanceToFlake)() > utils_1.PERCENT_CHANCE_OF_SUCCESS) {
        (0, utils_1.log)('Date.now flaking');
        return clonedNow.apply(this, []) - 86400000;
    }
    return clonedNow.apply(this, []);
};
// now
// console.log(Date.now())
// sample of havoc to be caused
// - Date.now() -> can return a date 1 day ago
// show date.now in demo and show redirect to code in the event someone tries to investigate
