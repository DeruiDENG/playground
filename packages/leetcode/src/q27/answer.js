// @ts-check
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let startIndex = 0;
  let endIndex = 0;
  while (endIndex < nums.length) {
    if (nums[endIndex] === val) {
      endIndex++;
    } else {
      nums[startIndex] = nums[endIndex];
      startIndex++;
      endIndex++;
    }
  }

  return startIndex;
};

export { removeElement };
