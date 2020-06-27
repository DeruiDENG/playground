import { mergeInterval } from './answer';

describe('q56', function() {
  it('should work for simple case', function() {
    const input = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const output = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    expect(mergeInterval(input)).toEqual(output);
  });

  it('should work for simple case 2 ', function() {
    const input = [
      [1, 4],
      [4, 5],
    ];
    const output = [[1, 5]];
    expect(mergeInterval(input)).toEqual(output);
  });
});
