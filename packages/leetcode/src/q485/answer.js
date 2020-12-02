// @ts-check

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let startPtr = 0;
  let endPtr = 0;
  let length = 0;
  while (endPtr < nums.length) {
    if (nums[endPtr] === 1) {
      endPtr++;
    } else {
      length = Math.max(length, endPtr - startPtr);
      endPtr++;
      startPtr = endPtr;
    }
  }

  length = Math.max(length, endPtr - startPtr);

  return length;
};

export { findMaxConsecutiveOnes };
