const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let tempArr = [];
  let delNumNext, delNumPrev, doubleNumNext, doubleNumPrev, nextElem, prevElem;
  for (let i = 0; i < arr.length; i++) {
    tempArr.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next" && arr[i + 1]) {
      delNumNext = i + 1;
      tempArr.splice(delNumNext, 1, "deleted");
    }
    if (arr[i] === "--discard-prev" && i !== 0) {
      delNumPrev = i - 1;
      tempArr.splice(delNumPrev, 1, "deleted");
    }
    if (arr[i] === "--double-next" && arr[i + 1] && arr[i + 1] !== "deleted") {
      doubleNumNext = i + 1;
      nextElem = arr[i + 1];
    }
    if (arr[i] === "--double-prev" && i !== 0 && arr[i - 1] !== "deleted") {
      doubleNumPrev = i - 1;
      prevElem = arr[i - 1];
    }
  }
  let doubleNext = [];
  for (let i = 0; i < arr.length; i++) {
    if (tempArr[i] !== nextElem && tempArr[i] !== prevElem) {
      doubleNext.push(tempArr[i]);
    }
    if (tempArr[i] === nextElem) {
      doubleNext.push(nextElem, nextElem);
    }
  }
  let res = [];
  let isSimillar = true;
  for (let i = 0; i < doubleNext.length; i++) {
    if (doubleNext[i] !== nextElem && doubleNext[i] !== prevElem) {
      res.push(doubleNext[i]);
      // console.log(111);
    }
    if (
      doubleNext[i] === prevElem &&
      doubleNumPrev === doubleNumNext &&
      isSimillar
    ) {
      res.push(prevElem, prevElem);
      // console.log(222);
      isSimillar = false;
    } else if (doubleNext[i] === prevElem && doubleNumPrev === doubleNumNext) {
      res.splice(res.length - 1, 0, prevElem);
    } else if (doubleNext[i] === prevElem) {
      res.splice(res.length - 1, 0, prevElem, prevElem);
      // console.log(333);
    }
  }

  return res
    .filter((elem) => elem !== "deleted")
    .filter((elem) => elem !== "--discard-prev")
    .filter((elem) => elem !== "--discard-next")
    .filter((elem) => elem !== "--double-prev")
    .filter((elem) => elem !== "--double-next");
}

module.exports = {
  transform,
};
