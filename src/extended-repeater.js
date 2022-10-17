const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str1, options) {
  let str;
  if (str1 !== null) str = str1.toString();
  if (str1 === null) str = "null";
  if (options.addition) options.addition = options.addition.toString();
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";
  let resStr = "";
  // let endStr = "";
  if (options.repeatTimes && options.repeatTimes !== 1) {
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      resStr = resStr + `${str}`;
      if (options.additionRepeatTimes) {
        for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
          resStr =
            resStr + `${options.addition}` + `${options.additionSeparator}`;
        }
        resStr = resStr + `${options.addition}`;
      }
      resStr = resStr + `${options.separator}`;
    }
    resStr = resStr + str;
    if (options.additionRepeatTimes) {
      for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
        resStr =
          resStr + `${options.addition}` + `${options.additionSeparator}`;
      }
      resStr = resStr + `${options.addition}`;
    }
  } else if (options.repeatTimes) {
    resStr = resStr + str;
    if (options.additionRepeatTimes) {
      for (let j = 0; j < options.additionRepeatTimes - 1; j++) {
        resStr =
          resStr + `${options.addition}` + `${options.additionSeparator}`;
      }
      resStr = resStr + `${options.addition}`;
    }
  } else if (options.addition) {
    resStr = str + `${options.addition}`;
  } else resStr = str;

  return resStr;
}

module.exports = {
  repeater,
};
