import { findContinuousSequence } from './i51';

describe('i51', () => {
  it('should work for `9`', () => {
    const input = 9;
    const expected = [
      [2, 3, 4],
      [4, 5],
    ];
    const result = findContinuousSequence(input);
    expect(result).toEqual(expected);
  });

  it('should work for `15`', () => {
    const input = 15;
    const expected = [
      [1, 2, 3, 4, 5],
      [4, 5, 6],
      [7, 8],
    ];
    const result = findContinuousSequence(input);
    expect(result).toEqual(expected);
  });
});
