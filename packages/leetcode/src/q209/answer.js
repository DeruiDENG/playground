// @ts-check

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let startPtr = 0;
  let endPtr = 0;
  let length = Number.MAX_SAFE_INTEGER;
  let total = 0;
  while (true) {
    if (total >= s) {
      length = Math.min(length, endPtr - startPtr);
      total -= nums[startPtr];
      startPtr++;
    } else {
      if (endPtr === nums.length) {
        break;
      }
      total += nums[endPtr];
      endPtr++;
    }
  }

  return length === Number.MAX_SAFE_INTEGER ? 0 : length;
};

export { minSubArrayLen };
