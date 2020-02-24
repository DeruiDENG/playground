import { sum } from './explosiveSum';

describe('explosiveSum', function() {
  it('should pass sample tests', function() {
    expect(sum(1)).toBe(1);
    expect(sum(2)).toBe(2);
    expect(sum(3)).toBe(3);
    expect(sum(4)).toBe(5);
    expect(sum(5)).toBe(7);
    expect(sum(10)).toBe(42);
  });
});
