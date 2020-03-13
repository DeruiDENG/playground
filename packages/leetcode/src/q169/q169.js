// @ts-check

/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = function(nums) {
  const half = nums.length / 2;
  /**
   *
   * @type {Map<number, number>}
   */
  const repeatCountMap = new Map();
  for (const num of nums) {
    const count = (repeatCountMap.get(num) ? repeatCountMap.get(num) : 0) + 1;
    if (count > half) {
      return num;
    }

    repeatCountMap.set(num, count);
  }
};
