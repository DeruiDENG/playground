// @ts-check

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  /**
   * @type {{[key: string]:number}}
   */
  const countMap = {};
  for (const char of Array.from(s)) {
    countMap[char] = countMap[char] ? countMap[char] + 1 : 1;
  }

  const values = Object.values(countMap);
  const hasOdd = values.some(value => value % 2 === 1);
  return (
    values.reduce((acc, val) => acc + val - (val % 2), 0) + (hasOdd ? 1 : 0)
  );
};

export { longestPalindrome };
