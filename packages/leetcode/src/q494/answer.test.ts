import { findTargetSumWays } from './answer';

describe('q494', function() {
  it('should work for basic test case', function() {
    const array = [1, 1, 1, 1, 1];
    const S = 3;
    expect(findTargetSumWays(array, S)).toBe(5);
  });
  it('should work for basic test case 2', function() {
    const array = [1, 0];
    const S = 1;
    expect(findTargetSumWays(array, S)).toBe(2);
  });
});
