const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return dateSample.arguments.length === 0 || typeof sampleActivity !== String
  ?
  false
  :
  (Math.log( MODERN_ACTIVITY / parseFloat(sampleActivity))  / ( 0.693 / HALF_LIFE_PERIOD ) / 100.0) * 100.0
};
