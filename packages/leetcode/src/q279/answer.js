// @ts-check

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const squares = findSquares(n);
  const queue = [{ val: n, step: 0 }];
  const processedValues = [n];
  while (queue.length) {
    const node = queue.shift();
    const remainders = squares.map(square => node.val - square);
    for (const remainder of remainders) {
      if (remainder === 0) {
        return node.step + 1;
      }

      if (remainder < 0) {
        continue;
      }

      if (!processedValues.some(value => value === remainder)) {
        processedValues.push(remainder);
        queue.push({ val: remainder, step: node.step + 1 });
      }
    }
  }

  return -1;
};

/**
 * Find all squares that is equal or smaller than n
 * @param {number} n
 * @return {number[]}
 */
function findSquares(n) {
  const result = [];
  let base = 1;
  while (base * base <= n) {
    result.push(base * base);
    base++;
  }

  return result;
}

export { numSquares };
