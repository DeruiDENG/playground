import { findPrimes, range } from './integers';

describe('integersUtils', function () {
  it('should range function work', function () {
    expect(range(5, 8)).toEqual([5, 6, 7, 8]);
    expect(range(5, 5)).toEqual([5]);
    expect(range(-1, 5)).toEqual([-1, 0, 1, 2, 3, 4, 5]);
    expect(range(5, 1)).toEqual([]);
  });

  it('should findPrimes work', function () {
    expect(findPrimes(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
    expect(findPrimes(1)).toEqual([]);
    expect(findPrimes(2)).toEqual([2]);
    expect(findPrimes(4)).toEqual([2, 3]);
    expect(findPrimes(5)).toEqual([2, 3, 5]);
  });
});
