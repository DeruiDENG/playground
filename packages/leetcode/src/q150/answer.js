// @ts-check
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  /**
   * @type {number[]}
   */
  const stack = [];
  for (const token of tokens) {
    switch (token) {
      case '+': {
        const second = stack.pop();
        const first = stack.pop();
        stack.push(first + second);
        break;
      }
      case '-': {
        const second = stack.pop();
        const first = stack.pop();
        stack.push(first - second);
        break;
      }
      case '/': {
        const second = stack.pop();
        const first = stack.pop();
        const result = first / second;
        stack.push(result > 0 ? Math.floor(result) : Math.ceil(result));
        break;
      }
      case '*': {
        const second = stack.pop();
        const first = stack.pop();
        stack.push(first * second);
        break;
      }
      default: {
        stack.push(Number.parseInt(token, 10));
      }
    }
  }

  return stack.pop();
};

export { evalRPN };
