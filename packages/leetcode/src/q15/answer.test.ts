import { threeSum } from './answer';

describe('q15', () => {
  it('should work for `[-1, 0, 1, 2, -1, -4]`', () => {
    const testCase = [-1, 0, 1, 2, -1, -4];
    const expected = [
      [-1, 0, 1],
      [-1, -1, 2],
    ];
    const result = threeSum(testCase);
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toEqual(expected.length);
  });
});
