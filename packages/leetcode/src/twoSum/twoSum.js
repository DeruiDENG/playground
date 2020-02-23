/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsMap.set(num, [...(numsMap.get(num) ?? []), i]);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remainder = target - num;
    if (remainder < num) {
      continue;
    }
    const remainderIndexs = numsMap.get(remainder);
    if (num === remainder) {
      if (remainderIndexs.length === 2) {
        return remainderIndexs;
      }
    } else if (remainderIndexs) {
      return [i, remainderIndexs[0]];
    }
  }
};
