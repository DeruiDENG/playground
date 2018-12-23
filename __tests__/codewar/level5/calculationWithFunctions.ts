import { eight, seven, times } from '../../../src/codewar/level5/calculationWithFunctions';

describe('functions', function () {
  it('should dance', function () {
    expect(seven(times(eight()))).toBe(56);
  });
});
