import { setZeroes } from './answer';

describe('i0108', function() {
  it('should work for simple case', function() {
    const input = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];

    const expected = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];

    setZeroes(input);

    expect(input).toEqual(expected);
  });

  it('should work for simple case 2', function() {
    const input = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];

    const expected = [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ];

    setZeroes(input);

    expect(input).toEqual(expected);
  });
});
