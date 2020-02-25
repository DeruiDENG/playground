import { lengthOfLongestSubstring } from './q3';

describe('q3', () => {
  it('should work for `abcabcbb`', () => {
    const testCase = 'abcabcbb';
    const expected = 3;
    const result = lengthOfLongestSubstring(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `bbbbb`', () => {
    const testCase = 'bbbbb';
    const expected = 1;
    const result = lengthOfLongestSubstring(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `pwwkew`', () => {
    const testCase = 'pwwkew';
    const expected = 3;
    const result = lengthOfLongestSubstring(testCase);
    expect(result).toBe(expected);
  });

  it('should work for ` `', () => {
    const testCase = ' ';
    const expected = 1;
    const result = lengthOfLongestSubstring(testCase);
    expect(result).toBe(expected);
  });
});
