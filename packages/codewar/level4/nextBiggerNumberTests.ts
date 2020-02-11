import { nextBigger } from './nextBiggerNumber';

describe('nextBiggerNumber', function () {
  it('should work', function () {
    expect(nextBigger(12)).toBe(21);
    expect(nextBigger(513)).toBe(531);
    expect(nextBigger(2017)).toBe(2071);
    expect(nextBigger(414)).toBe(441);
    expect(nextBigger(144)).toBe(414);
  });
});
