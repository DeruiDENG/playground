// @ts-check

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let result = 0;
  /**
   * @type {Map<number, number>} - key: index, value: longest length of array starting from the point
   */
  const map = new Map();
  for (let i = nums.length - 1; i >= 0; i--) {
    let length = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        const lengthStartingFromSubarray = map.get(j);
        length = Math.max(length, lengthStartingFromSubarray + 1);
      }
    }

    map.set(i, length);
    result = Math.max(result, length);
  }

  return result;
};

export { lengthOfLIS };
