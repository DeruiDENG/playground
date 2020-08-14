import { minPathSum } from './answer';

describe('q64', function() {
  it('should work for simple case', function() {
    const input = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ];
    const output = 7;
    expect(minPathSum(input)).toEqual(output);
  });
});
