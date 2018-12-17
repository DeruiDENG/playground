import { remove, uniq } from '../../../src/codewar/utils/array';

describe('arrayTests', function () {
  it('should removeWorks', function () {
    expect(remove([1, 3, 5], 5)).toEqual([1, 3]);
    expect(remove([1, 3, 5, 5], 5)).toEqual([1, 3, 5]);
    expect(remove(['5', '6', '77'], '77')).toEqual(['5', '6']);
    expect(remove(['5', '6', '77'], '7')).toEqual(['5', '6', '77']);
  });

  it('should uniq work', function () {
    expect(uniq([1, 3, 5, 5])).toEqual([1, 3, 5]);
    expect(uniq([1, 3, 5, 5, 3])).toEqual([1, 3, 5]);
    expect(uniq([1, 3, 5, 5, 3]).sort()).toEqual([1, 3, 5].sort());
    expect(uniq(['1', '5', '6', '6']).sort()).toEqual(['1', '5', '6'].sort());
    expect(uniq(['1', '5', '6', '66']).sort()).toEqual(['1', '5', '6', '66'].sort());
  });
});
