import { lengthOfLIS } from './q300';

describe('q300', () => {
  it('should work for `[10, 9, 2, 5, 3, 7, 101, 18]`', () => {
    const testCase = [10, 9, 2, 5, 3, 7, 101, 18];
    const expected = 4;
    const result = lengthOfLIS(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `[-2, -1]`', () => {
    const testCase = [-2, -1];
    const expected = 2;
    const result = lengthOfLIS(testCase);
    expect(result).toBe(expected);
  });
});
