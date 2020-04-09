import { reverse } from './answer';

describe('q7', function() {
  it('should work for 123', function() {
    expect(reverse(123)).toBe(321);
  });

  it('should work for -123', function() {
    expect(reverse(-123)).toBe(-321);
  });

  it('should work for 120', function() {
    expect(reverse(120)).toBe(21);
  });
});
