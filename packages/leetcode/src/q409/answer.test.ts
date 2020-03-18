import { longestPalindrome } from './answer';

describe('answer', () => {
  it('should work for `abccccdd`', () => {
    const testCase = 'abccccdd';
    const expected = 7;
    const result = longestPalindrome(testCase);
    expect(result).toBe(expected);
  });
});
