// @ts-check

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  /**
   * @type {Map<number, number>}
   */
  const map = new Map();
  for (const num of nums) {
    const count = map.get(num);
    if (count) {
      map.set(num, count + 1);
    } else {
      map.set(num, 1);
    }
  }

  return Array.from(map.entries()).find(entry => entry[1] === 1)[0];
};

export { singleNumber };
