import { calculateNetworkQuality } from './answer';

describe('network problem of abu', function () {
  it.skip('should work for simple case', function () {
    const input = [[10, 8, 6], [6, 8, 4], [12, 9, 10]];
    const output = 8;
    expect(calculateNetworkQuality(input)).toEqual(output);
  });

  it.skip('should work for advanced case', function () {
    const input = [[20, 19, 18, 17], [7, 4, 6, 16], [18, 15, 15, 16], [4, 16, 11, 4], [6, 17, 16, 18]];
    const output = 15;
    expect(calculateNetworkQuality(input)).toEqual(output);
  });
});
