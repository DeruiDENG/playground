import { maxSubArray } from './answer';

describe('q53', function() {
  it('should work for simple input', function() {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(maxSubArray(input)).toBe(6);
  });

  it('should work for simple input 2', function() {
    const input = [1];
    expect(maxSubArray(input)).toBe(1);
  });
});
