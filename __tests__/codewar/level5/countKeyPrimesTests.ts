import { assert } from 'chai';
import { G964 } from '../../../src/codewar/level5/countKeyPrimes';

describe('Fixed Tests', function () {
  it('Basic tests countKprimes', function () {
    expect(G964.countKprimes(2, 0, 100))
      .toEqual([4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49, 51, 55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]);
    expect(
      G964.countKprimes(3, 0, 100))
      .toEqual([8, 12, 18, 20, 27, 28, 30, 42, 44, 45, 50, 52, 63, 66, 68, 70, 75, 76, 78, 92, 98, 99]);
    expect(
      G964.countKprimes(5, 1000, 1100))
      .toEqual([1020, 1026, 1032, 1044, 1050, 1053, 1064, 1072, 1092, 1100]);
    expect(G964.countKprimes(5, 500, 600))
      .toEqual([500, 520, 552, 567, 588, 592, 594]);
  });

  it('should puzzle work', function () {
    expect(G964.puzzle(138)).toBe(1);
    expect(G964.puzzle(143)).toBe(2);
  });
});
