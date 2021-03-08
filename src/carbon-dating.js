const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  console.log(typeof sampleActivity);
  console.log(parseFloat(sampleActivity));
  let answer = (dateSample.arguments.length === 0) || ((typeof sampleActivity).toString().toUpperCase() !== "String".toUpperCase()) || parseFloat(sampleActivity) > 8000 || parseFloat(sampleActivity) < 1 || isNaN(parseFloat(sampleActivity))
  ?
  false
  :
  Math.ceil((Math.log( MODERN_ACTIVITY / parseFloat(sampleActivity))  / ( 0.693 / HALF_LIFE_PERIOD ) / 100.0) * 100.0)
  return answer < 0 ? false : answer;
};
