import { G964 } from './sumOfFactors';

describe('sumOfDivided should work', function () {
  it('Basic tests', function () {
    expect(G964.sumOfDivided([12, 15])).toEqual([[2, 12], [3, 27], [5, 15]]);
    expect(G964.sumOfDivided([15, 21, 24, 30, 45])).toEqual([[2, 54], [3, 135], [5, 90], [7, 21]]);
    expect(G964.sumOfDivided([12, -15])).toEqual([[2, 12], [3, -3], [5, -15]]);
    expect(G964.sumOfDivided([5, 10])).toEqual([[2, 10], [5, 15]]);
  });
});
