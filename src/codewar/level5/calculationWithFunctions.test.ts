import { eight, seven, times } from './calculationWithFunctions';

describe('functions', function () {
  it('should dance', function () {
    expect(seven(times(eight()))).toBe(56);
  });
});
