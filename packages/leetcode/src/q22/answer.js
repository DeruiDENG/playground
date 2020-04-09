// @ts-check

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  return generate([], [], n);
};

/**
 *
 * @param {string[]} baseChars
 * @param {string[]} baseStack
 * @param {number} n
 * @return {string[]}
 */
function generate(baseChars, baseStack, n) {
  const results = [];
  if (n === 0 && baseStack.length === 0) {
    results.push(baseChars.join(''));
  }

  if (n !== 0) {
    results.push(...generate([...baseChars, '('], [...baseStack, '('], n - 1));
  }

  if (baseStack.length && baseStack[baseStack.length - 1] === '(') {
    results.push(
      ...generate(
        [...baseChars, ')'],
        baseStack.slice(0, baseStack.length - 1),
        n
      )
    );
  }

  return results;
}

export { generateParenthesis };
