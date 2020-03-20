// @ts-check

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  /**
   *
   * @type {string[]}
   */
  const stack = [];
  for (const char of Array.from(s)) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')') {
      const val = stack.pop();
      if (val !== '(') {
        return false;
      }
    } else if (char === '}') {
      const val = stack.pop();
      if (val !== '{') {
        return false;
      }
    } else if (char === ']') {
      const val = stack.pop();
      if (val !== '[') {
        return false;
      }
    }
  }

  return stack.length === 0;
};

export { isValid };
