// @ts-check

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  /**
   * @type {number[]}
   */
  const occurredValue = [];

  while (true) {
    n = squareSum(n);
    if (occurredValue.findIndex(x => x === n) !== -1) {
      return false;
    }

    if (n === 1) {
      return true;
    }

    occurredValue.push(n);
  }
};

/**
 * @param {number} value
 * @return {number}
 */
function squareSum(value) {
  const digits = Array.from(value.toString()).map(digitString =>
    Number.parseInt(digitString, 10)
  );

  return digits.reduce((acc, val) => acc + val * val, 0);
}

export { isHappy };
