import { rotate } from './answer';

describe('i0107', function() {
  it('should work for simple case', function() {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    rotate(input);

    expect(input).toEqual(expected);
  });

  it('should work for simple case 2', function() {
    const input = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];

    const expected = [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ];

    rotate(input);

    expect(input).toEqual(expected);
  });
});
