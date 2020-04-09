import { movingCount } from './answer';

describe('i13', function() {
  it('should work for m = 2, n = 3, k = 1', function() {
    expect(movingCount(2, 3, 1)).toBe(3);
  });

  it('should work for m = 3, n = 1, k = 0', function() {
    expect(movingCount(3, 1, 0)).toBe(1);
  });
});
