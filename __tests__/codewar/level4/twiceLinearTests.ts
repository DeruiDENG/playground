import { G964 } from '../../../src/codewar/level4/twiceLinear';

describe('twiceLinear should work', function () {
  it('should pass simple test', function () {
    expect(G964.dblLinear(10)).toBe(22);
    expect(G964.dblLinear(20)).toBe(57);
    expect(G964.dblLinear(30)).toBe(91);
  });
});
