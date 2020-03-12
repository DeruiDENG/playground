import { gcdOfStrings } from './q1071';

describe('q1071', () => {
  it('should work for `ABCABC, ABC`', () => {
    const testCase = ['ABCABC', 'ABC'];
    const expected = 'ABC';
    const result = gcdOfStrings(...testCase);
    expect(result).toBe(expected);
  });

  it('should work for `ABABAB, ABAB`', () => {
    const testCase = ['ABABAB', 'ABAB'];
    const expected = 'AB';
    const result = gcdOfStrings(...testCase);
    expect(result).toBe(expected);
  });

  it('should work for `LEET, CODE`', () => {
    const testCase = ['LEET', 'CODE'];
    const expected = '';
    const result = gcdOfStrings(...testCase);
    expect(result).toBe(expected);
  });
});
