import { range } from '../../../src/codewar/utils/integers';

describe('integersUtils', function () {
  it('should range function work', function () {
    expect(range(5, 8)).toEqual([5, 6, 7, 8]);
    expect(range(5, 5)).toEqual([5]);
    expect(range(-1, 5)).toEqual([-1, 0, 1, 2, 3, 4, 5]);
    expect(range(5, 1)).toEqual([]);
  });
});
