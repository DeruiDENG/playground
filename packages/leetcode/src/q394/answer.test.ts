import { decodeString } from './answer';

describe('q394', function() {
  it('should work for simple case 1', function() {
    const input = '3[a]2[bc]';
    const expected = 'aaabcbc';
    expect(decodeString(input)).toBe(expected);
  });

  it('should work for simple case 2', function() {
    const input = '3[a2[c]]';
    const expected = 'accaccacc';
    expect(decodeString(input)).toBe(expected);
  });

  it('should work for simple case 3', function() {
    const input = '2[abc]3[cd]ef';
    const expected = 'abcabccdcdcdef';
    expect(decodeString(input)).toBe(expected);
  });

  it('should work for simple case 4', function() {
    const input = 'abc3[cd]xyz';
    const expected = 'abccdcdcdxyz';
    expect(decodeString(input)).toBe(expected);
  });
});
