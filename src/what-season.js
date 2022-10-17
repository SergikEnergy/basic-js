const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!(date instanceof Date)) throw new Error("Invalid date!");
  if (Object.keys(date).length !== 0) throw new Error("Invalid date!");

  let month = date.getMonth();
  let winterArr = [0, 1, 11, "winter"];
  let summerArr = [5, 6, 7, "summer"];
  let springArr = [2, 3, 4, "spring"];
  let autumnArr = [8, 9, 10, "autumn"];
  for (let i = 0; i < summerArr.length - 1; i++) {
    if (month === winterArr[i]) return winterArr[winterArr.length - 1];
    else if (month === summerArr[i]) return summerArr[summerArr.length - 1];
    else if (month === springArr[i]) return springArr[springArr.length - 1];
    else if (month === autumnArr[i]) return autumnArr[autumnArr.length - 1];
  }
}

module.exports = {
  getSeason,
};
