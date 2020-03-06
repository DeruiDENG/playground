// @ts-check

/**
 * @param {number} target
 * @return {number[][]}
 */
export const findContinuousSequence = function(target) {
  /**
   * @type {number[][]}
   */
  const result = [];
  const array = generateArray(1, Math.ceil(Math.sqrt(target * 2)));
  let total = array.reduce((total, val) => total + val, 0);
  while (array.length >= 2) {
    if (total >= target) {
      if (total === target) {
        result.push([...array]);
      }
      const removedValue = array.pop();
      total = total - removedValue;
    } else if (total < target) {
      const addedValue = array[array.length - 1] + 1;
      array.push(array[array.length - 1] + 1);
      const removedValue = array.shift();
      total = total + addedValue - removedValue;
    }
  }

  return result;
};

/**
 * @param {number} startValue
 * @param {number} length
 * @return {number[]}
 */
function generateArray(startValue, length) {
  return Array(length)
    .fill(0)
    .map((val, index) => index + startValue);
}
