import { findAll } from '../../../src/codewar/level4/howManyNumbers';

describe('Example Tests', function () {
  it('Simple Cases', function () {
    expect(findAll(10, 3)).toEqual([8, '118', '334']);
    expect(findAll(27, 3)).toEqual([1, '999', '999']);
    expect(findAll(84, 4)).toEqual([]);
    expect(findAll(35, 6)).toEqual([123, '116999', '566666']);
  });
});
