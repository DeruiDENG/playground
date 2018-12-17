import { sumIntervals } from '../../../src/codewar/level4/sumOfIntervals';

describe('sumOfIntervals', function () {
  it('should pass simple test', function () {
    expect(sumIntervals([[1, 5]])).toBe(4);
    expect(sumIntervals([[1, 5], [6, 10]])).toBe(8);
  });

  it('should pass advanced test', function () {
    expect(sumIntervals([[1, 5], [1, 5]])).toBe(4);
    expect(sumIntervals([[1, 4], [7, 10], [3, 5]])).toBe(7);
  });
});
