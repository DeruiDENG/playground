// @ts-check

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let largestSum = nums[0];
  let largestSumIncludingCurrentValue = 0;
  nums.forEach(currentValue => {
    // 基于尾部元素的数学归纳：
    // previous: 包含当前元素的子序列求和最大值
    largestSumIncludingCurrentValue = Math.max(
      largestSumIncludingCurrentValue + currentValue,
      currentValue
    );
    largestSum = Math.max(largestSum, largestSumIncludingCurrentValue);
  });

  return largestSum;
};

export { maxSubArray };
