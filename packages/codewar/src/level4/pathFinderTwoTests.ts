import { pathFinder } from './pathFinderTwo';

describe('pathFinderThree', function() {
  it('should pass simple test', function() {
    let areaInput = `.W.
.W.
...`;
    expect(pathFinder(areaInput)).toBe(4);

    areaInput = `.W.
.W.
W..`;
    expect(pathFinder(areaInput)).toBe(false);

    areaInput = `......
......
......
......
......
......`;
    expect(pathFinder(areaInput)).toBe(10);

    areaInput = `......
......
......
......
.....W
....W.`;
    expect(pathFinder(areaInput)).toBe(false);
  });
});
