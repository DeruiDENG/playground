import { threeSumClosest } from './answer';

describe('q16', () => {
  it('should work for `[[-1, 2, 1, -4], 1]`', () => {
    const testCase = [[-1, 2, 1, -4], 1];
    const expected = 2;
    const result = threeSumClosest(...testCase);
    expect(result).toBe(expected);
  });
});
