// @ts-check
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  return nums.reduce(
    (acc, value, index) => (index % 2 === 0 ? acc + value : acc),
    0
  );
};

export { arrayPairSum };
