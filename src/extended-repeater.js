const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {

  if(options['repeatTimes'] == undefined){
    options['repeatTimes'] = 1;
  }
  if(options['addition'] === undefined){
    options['addition'] = '';
  }
  if(options['addition'] == null){
    options['addition'] = 'null';
  }
  if(options['additionRepeatTimes'] == undefined){
    options['additionRepeatTimes'] = 1;
  }

  let answer =''

  for (let i = 0; i < options['repeatTimes']; i++) {
    answer = answer + str
      for (let j = 0; j < options['additionRepeatTimes']; j++) {
        j != (options['additionRepeatTimes'] - 1) ? answer = answer + `${options.addition}` + (options['additionSeparator'] || '|') :  answer = answer + (`${options.addition}`)
      }
      i != (options['repeatTimes'] - 1) ? answer = answer + (options['separator'] || '+') : answer
  }

  return answer
};
