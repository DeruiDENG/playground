// @ts-check

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = Number.MAX_SAFE_INTEGER;
  let smallestDifference = Number.MAX_SAFE_INTEGER;
  for (let firstNumIndex = 0; firstNumIndex < nums.length; firstNumIndex++) {
    let secondNumberIndex = firstNumIndex + 1;
    let thirdNumberIndex = nums.length - 1;
    while (secondNumberIndex < thirdNumberIndex) {
      const total =
        nums[firstNumIndex] + nums[secondNumberIndex] + nums[thirdNumberIndex];
      const difference = Math.abs(total - target);
      if (difference < smallestDifference) {
        result = total;
        smallestDifference = difference;
      }

      if (total === target) {
        break;
      }

      if (total < target) {
        secondNumberIndex++;
      } else if (total > target) {
        thirdNumberIndex--;
      }
    }
  }

  return result;
};

export { threeSumClosest };
