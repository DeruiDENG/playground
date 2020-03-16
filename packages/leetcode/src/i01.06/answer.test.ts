import { compressString } from './answer';

describe('answer for i01.06', () => {
  it('should work for `aabcccccaaa`', () => {
    const testCase = 'aabcccccaaa';
    const expected = 'a2b1c5a3';
    const result = compressString(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `abbccd`', () => {
    const testCase = 'abbccd';
    const expected = 'abbccd';
    const result = compressString(testCase);
    expect(result).toBe(expected);
  });
});
