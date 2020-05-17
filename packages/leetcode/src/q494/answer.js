// @ts-check

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  if (nums.length === 0) {
    if (S === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  const sum = nums.reduce((acc, val) => acc + val, 0);
  if (sum < Math.abs(S)) {
    return 0;
  }

  return (
    findTargetSumWays(nums.slice(1), S + nums[0]) +
    findTargetSumWays(nums.slice(1), S - nums[0])
  );
};

export { findTargetSumWays };
