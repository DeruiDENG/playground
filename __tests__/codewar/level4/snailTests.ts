import { snail } from '../../../src/codewar/level4/snail';

describe('Snail', function () {
  it('should works', function () {
    let array = [[1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]];
    expect(snail(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    array = [[]];
    expect(snail(array)).toEqual([]);

    array = [[1]];
    expect(snail(array)).toEqual([1]);
  });
});
