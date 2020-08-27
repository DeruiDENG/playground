// @ts-check
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  /**
   * @type {number[]}
   */
  const result = [];

  const Y = matrix.length;
  if (Y === 0) {
    return result;
  }

  const X = matrix[0].length;
  for (let i = 0; i < X + Y; i++) {
    const up = i % 2 === 0;
    if (up) {
      for (let y = Y - 1; y >= 0; y--) {
        const x = i - y;
        if (x >= 0 && x < X) {
          result.push(matrix[y][x]);
        }
      }
    } else {
      for (let y = 0; y < Y; y++) {
        const x = i - y;
        if (x >= 0 && x < X) {
          result.push(matrix[y][x]);
        }
      }
    }
  }

  return result;
};

export { findDiagonalOrder };
