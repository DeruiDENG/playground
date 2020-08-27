import { longestCommonPrefix } from './answer';

describe('q14', function() {
  it('should work for simple case', function() {
    const input = ['flower', 'flow', 'flight'];
    const output = 'fl';
    expect(longestCommonPrefix(input)).toEqual(output);
  });

  it('should work for simple case 2', function() {
    const input = ['dog', 'racecar', 'car'];
    const output = '';
    expect(longestCommonPrefix(input)).toEqual(output);
  });
});
