import { findMaxConsecutiveOnes } from './answer';

describe('q485', function() {
  it('should work for simple case', function() {
    const input = [1, 0, 1, 1, 0, 1];
    const output = 2;
    expect(findMaxConsecutiveOnes(input)).toEqual(output);
  });
});
