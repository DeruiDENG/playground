// @ts-check

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  /**
   * @type {{[key:string]:string[]}}
   */
  const digitCharsMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  /**
   * @type {string[][]}
   */
  const charsArray = Array.from(digits).map(digit => digitCharsMap[digit]);
  /**
   * @type {string[]}
   */
  let result = [];
  for (const chars of charsArray) {
    if (result.length === 0) {
      result = chars;
    } else {
      const arr = result.map(val => chars.map(char => `${val}${char}`));
      result = [].concat(...arr);
    }
  }

  return result;
};

export { letterCombinations };
