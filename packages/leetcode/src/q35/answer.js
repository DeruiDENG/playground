// @ts-check
/**
 * Using binary search template
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let leftBound = 0;
  let rightBound = nums.length - 1;
  while (leftBound <= rightBound) {
    const attemptIndex = Math.floor((leftBound + rightBound) / 2);
    if (nums[attemptIndex] === target) {
      return attemptIndex;
    }

    if (nums[attemptIndex] < target) {
      leftBound = attemptIndex + 1;
    }

    if (nums[attemptIndex] > target) {
      rightBound = attemptIndex - 1;
    }
  }

  return leftBound;
};

export { searchInsert };
