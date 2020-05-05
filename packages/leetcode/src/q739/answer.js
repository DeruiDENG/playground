// @ts-check

/**
 * @typedef TempatureData
 * @prop {number} day
 * @prop {number} temp
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const result = Array.from(Array(T.length)).fill(0);
  /**
   * @type {TempatureData[]}
   */
  const stack = [];
  T.forEach((temp, day) => {
    if (
      stack[stack.length - 1] !== undefined &&
      stack[stack.length - 1].temp < temp
    ) {
      while (stack.length && stack[stack.length - 1].temp < temp) {
        const data = stack.pop();
        result[data.day] = day - data.day;
      }
    }

    stack.push({ day, temp });
  });

  return result;
};

export { dailyTemperatures };
