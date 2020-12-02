import { minSubArrayLen } from './answer';

describe('q209', function() {
  it('should work for simple case', function() {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
  });
});
