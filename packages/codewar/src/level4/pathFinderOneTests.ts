import { pathFinder } from './pathFinderOne';

describe('pathFinderOne', function() {
  it('should pass basic test', function() {
    let maze = `.W.
.W.
W..`;
    //     expect(pathFinder(maze)).toBeFalsy();
    //
    //     maze =
    //       `.W.
    // .W.
    // ...`;
    //     expect(pathFinder(maze)).toBeTruthy();
    maze = `......
......
......
......
.....W
....W.`;
    expect(pathFinder(maze)).toBeFalsy();
  });
});
