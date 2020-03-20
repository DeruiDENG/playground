/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  if (nums.length < 3) {
    return [];
  }

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i > 0 && nums[i] === nums[i - 1]) {
      // This scenario has already been covered when handling previous i
      continue;
    }

    if (num > 0) {
      // Remaining nums must all be larger than 0
      break;
    }

    const remainder = -num;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const total = nums[left] + nums[right];
      if (total === remainder) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          // Skip duplicate answer
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          // Skip duplicate answer
          right--;
        }
        // left++ or right-- alone will not work, so move both
        left++;
        right--;
      } else if (total > remainder) {
        // right-- is the smallest next step
        right = right - 1;
      } else if (total < remainder) {
        // left++ is the smallest next step
        left = left + 1;
      }
    }
  }

  return result;
};

export { threeSum };
