const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.join(',').split(',').reduce((acc, item) => item === '^^' ? acc = acc + 1 : acc, 0 )
};
