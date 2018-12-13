import { determinant, getSubMatrix } from '../../../src/codewar/level4/matrixDeterminant';

describe('matrixDeterminant', function () {
  it('should pass sample test', function () {
    expect(determinant([[5]])).toBe(5);

    expect(determinant([[1, 3], [2, 5]])).toBe(-1);

    expect(determinant([[2, 5, 3], [1, -2, -1], [1, 3, 4]])).toBe(-20);
  });
});

describe('getSubMatrix', function () {
  it('should work', function () {
    expect(getSubMatrix([[2, 5, 3], [1, -2, -1], [1, 3, 4]], 0)).toEqual([[-2, -1], [3, 4]]);
    expect(getSubMatrix([[2, 5, 3], [1, -2, -1], [1, 3, 4]], 1)).toEqual([[1, -1], [1, 4]]);
  });
});
