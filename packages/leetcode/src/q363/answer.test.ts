import { maxSumSubmatrix } from './answer';

describe('q363', () => {
  it('should work for `[[1,0,1],[0,-2,3]]`', () => {
    const matrix = [
      [1, 0, 1],
      [0, -2, 3],
    ];
    const k = 2;
    const expected = 2;
    const result = maxSumSubmatrix(matrix, k);
    expect(result).toBe(expected);
  });
});
