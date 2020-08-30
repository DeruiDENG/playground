// @ts-check
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let leftPtr = 0;
  let rightPtr = numbers.length - 1;
  while (leftPtr < rightPtr) {
    const leftNumber = numbers[leftPtr];
    const rightNumber = numbers[rightPtr];
    const sum = leftNumber + rightNumber;
    if (sum === target) {
      return [leftPtr + 1, rightPtr + 1];
    } else if (sum < target) {
      leftPtr++;
    } else {
      rightPtr--;
    }
  }
};
export { twoSum };
