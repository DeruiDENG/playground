/**
 * Matrix Determinant
 * https://www.codewars.com/kata/matrix-determinant/train/typescript
 */

export function determinant(m: number[][]): number {
  if (m.length === 1) {
    return m[0][0];
  }

  if (m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  }

  let total = 0;
  for (let columnIndex = 0; columnIndex < m[0].length; columnIndex++) {
    total += determinant(getSubMatrix(m, columnIndex))
      * m[0][columnIndex] * (columnIndex % 2 * (-2) + 1);
  }

  return total;
}

export function getSubMatrix(m: number[][], column: number): number[][] {
  return m.filter((row, index) => index !== 0)
    .map(row => row.filter((element, index) => index !== column));
}
