const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, isArray = 1, nesting = 0, nestingMax = 0) {
    if (arr instanceof Array) {
      for (let i = 0; i < arr.length; i++) {
        nesting = 0
        nesting =+ this.calculateDepth(arr[i])
        if (nesting > nestingMax) {
          nestingMax = nesting;
        }
      }
      return isArray + nestingMax
    } else { return 0 }
  }
};