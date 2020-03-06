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
  for (let length = Math.floor(target / 2); length >= 2; length--) {
    const isOddLength = length % 2 === 1;
    if (isOddLength) {
      if (target % length === 0) {
        const valueInTheMiddle = target / length;
        const startValue = valueInTheMiddle - (length - 1) / 2;
        if (startValue > 0) {
          result.push(generateArray(startValue, length));
        }
      }
    } else {
      if (target % length !== 0 && (target * 2) % length === 0) {
        const sumOfCenterTwo = (target * 2) / length;
        const startValue = (sumOfCenterTwo + 1) / 2 - length / 2;
        if (startValue > 0) {
          result.push(generateArray(startValue, length));
        }
      }
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
