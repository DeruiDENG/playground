/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(nums, target) {
  for (let firstNumIndex = 0; firstNumIndex < nums.length; firstNumIndex++) {
    const firstNum = nums[firstNumIndex];
    for (
      let secondNumIndex = firstNumIndex + 1;
      secondNumIndex < nums.length;
      secondNumIndex++
    ) {
      const secondNum = nums[secondNumIndex];
      if (firstNum + secondNum === target) {
        return [firstNumIndex, secondNumIndex];
      }
    }
  }
};
