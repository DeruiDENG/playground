// @ts-check

// [0,1]
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (!nums.length) {
    return -1;
  }

  let attemptPivotIndex = 0;
  let leftSum = nums[attemptPivotIndex];
  let rightSum = nums.reduce((acc, val) => acc + val, 0);
  while (attemptPivotIndex < nums.length) {
    if (leftSum === rightSum) {
      return attemptPivotIndex;
    }

    leftSum += nums[attemptPivotIndex + 1];
    rightSum -= nums[attemptPivotIndex];
    attemptPivotIndex++;
  }

  return -1;
};

export { pivotIndex };
