// @ts-check
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const N = matrix.length;
  for (let y = 0; y < Math.floor(N / 2); y++) {
    for (let x = 0; x < Math.ceil(N / 2); x++) {
      const values = [
        matrix[y][x],
        matrix[x][N - y - 1],
        matrix[N - y - 1][N - x - 1],
        matrix[N - x - 1][y],
      ];

      matrix[x][N - y - 1] = values[0];
      matrix[N - y - 1][N - x - 1] = values[1];
      matrix[N - x - 1][y] = values[2];
      matrix[y][x] = values[3];
    }
  }
};

export { rotate };
