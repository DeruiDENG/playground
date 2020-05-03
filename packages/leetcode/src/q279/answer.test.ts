import { numSquares } from './answer';

describe('q279', function() {
  it('should work for simple test case', function() {
    const input = 12;
    expect(numSquares(input)).toBe(3);
  });
});
