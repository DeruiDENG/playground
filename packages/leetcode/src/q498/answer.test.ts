import { findDiagonalOrder } from './answer';

describe('q498', function() {
  it('should work for simple case', function() {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const output = [1, 2, 4, 7, 5, 3, 6, 8, 9];
    expect(findDiagonalOrder(input)).toEqual(output);
  });
});
