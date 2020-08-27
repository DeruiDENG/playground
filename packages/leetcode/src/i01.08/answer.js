// @ts-check
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const Y = matrix.length;
  const X = matrix[0].length;
  for (let yIndex = 0; yIndex < Y; yIndex++) {
    for (let xIndex = 0; xIndex < X; xIndex++) {
      const element = matrix[yIndex][xIndex];
      if (element === 0) {
        for (let i = 0; i < X; i++) {
          if (matrix[yIndex][i] !== 0) {
            matrix[yIndex][i] = null;
          }
        }

        for (let j = 0; j < Y; j++) {
          if (matrix[j][xIndex] !== 0) {
            matrix[j][xIndex] = null;
          }
        }
      }
    }
  }

  for (let yIndex = 0; yIndex < Y; yIndex++) {
    for (let xIndex = 0; xIndex < X; xIndex++) {
      if (matrix[yIndex][xIndex] === null) {
        matrix[yIndex][xIndex] = 0;
      }
    }
  }
};

export { setZeroes };
