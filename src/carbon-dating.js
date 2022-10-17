const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let data = +sampleActivity;
  if (
    typeof sampleActivity === "number" ||
    typeof data != "number" ||
    sampleActivity === undefined ||
    sampleActivity === null ||
    typeof sampleActivity == "object" ||
    isNaN(data) ||
    typeof sampleActivity === "boolean"
  )
    return false;
  if (data <= 0 || data > 15) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / data) / k);
  return result;
}

module.exports = {
  dateSample,
};
