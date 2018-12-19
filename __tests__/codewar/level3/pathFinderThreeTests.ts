import { pathFinder } from '../../../src/codewar/level3/pathFinderThree';

describe('pathFinderThree', function () {
  it('should pass simple test', function () {
    let areaInput =
      `000
000
000`;
    expect(pathFinder(areaInput)).toBe(0);

    areaInput =
      `777000
007000
007000
007000
007000
007777`;
    expect(pathFinder(areaInput)).toBe(0);

    areaInput =
`777777
000007
007777
007000
007000
007777`;
    expect(pathFinder(areaInput)).toBe(0);
  });
});
