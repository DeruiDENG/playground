import { singleNumber } from './answer';

describe('q136', function() {
  it('should work for', function() {
    const input = [2, 2, 1];
    expect(singleNumber(input)).toBe(1);
  });
});
