// @ts-check

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  /**
   * @type {boolean[][]}
   */
  const grid = Array.from(Array(m)).map(row =>
    Array.from(Array(n)).fill(false)
  );
  return calcMovingCount(0, 0, grid, k);
};

/**
 *
 * @param {number} mIndex
 * @param {number} nIndex
 * @param {boolean[][]} grid
 * @param {number} limit
 * @returns {number}
 */
function calcMovingCount(mIndex, nIndex, grid, limit) {
  const M = grid.length;
  const N = grid[0].length;
  let count = 1;
  grid[mIndex][nIndex] = true;

  if (
    mIndex + 1 < M &&
    grid[mIndex + 1][nIndex] === false &&
    getDigitSum(mIndex + 1, nIndex) <= limit
  ) {
    count += calcMovingCount(mIndex + 1, nIndex, grid, limit);
  }

  if (
    nIndex + 1 < N &&
    grid[mIndex][nIndex + 1] === false &&
    getDigitSum(mIndex, nIndex + 1) <= limit
  ) {
    count += calcMovingCount(mIndex, nIndex + 1, grid, limit);
  }

  return count;
}

/**
 *
 * @param {number[]} values
 */
function getDigitSum(...values) {
  let sum = 0;
  for (const value of values) {
    const valueSum = Array.from(value.toString()).reduce(
      (acc, char) => acc + Number.parseInt(char),
      0
    );
    sum += valueSum;
  }

  return sum;
}

export { movingCount };
