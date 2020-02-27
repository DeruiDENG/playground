import { longestPalindrome } from './q5';

describe('q5', () => {
  it('should work for `babad`', () => {
    const testCase = 'babad';
    const expected = 'bab';
    const result = longestPalindrome(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `babad`', () => {
    const testCase = 'cbbd';
    const expected = 'bb';
    const result = longestPalindrome(testCase);
    expect(result).toBe(expected);
  });
});
