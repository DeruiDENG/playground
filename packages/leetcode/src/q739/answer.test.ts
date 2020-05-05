import { dailyTemperatures } from './answer';

describe('q739', function() {
  it('should work for simple test', function() {
    const input = [73, 74, 75, 71, 69, 72, 76, 73];
    expect(dailyTemperatures(input)).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });
});
