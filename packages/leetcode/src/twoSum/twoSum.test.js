import { twoSum } from './twoSum';

describe('twoSum', () => {
  const testCases = [{ nums: [2, 7, 11, 15], target: 9, expected: [0, 1] }];
  for (const { nums, target, expected } of testCases) {
    it(`should work for input ${nums}, target ${target}`, () => {
      const result = twoSum(nums, target);
      expect(result).toEqual(expected);
    });
  }
});
