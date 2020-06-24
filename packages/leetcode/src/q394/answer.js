// @ts-check

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  /**
   * @type {string[]}
   */
  const stack = [];
  for (const char of s) {
    if (char === ']') {
      /**
       * @type {string[]}
       */
      const toRepeat = [];
      while (stack[stack.length - 1] !== '[') {
        const top = stack.pop();
        toRepeat.unshift(top);
      }

      stack.pop(); // remove [

      /**
       * @type {string[]}
       */
      const repeat = [];
      while (stack.length && /^\d$/.test(stack[stack.length - 1])) {
        const top = stack.pop();
        repeat.unshift(top);
      }
      const repeatCount = Number.parseInt(repeat.join(''), 10);
      const result = toRepeat.join('').repeat(repeatCount);
      stack.push(result);
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
};

export { decodeString };
