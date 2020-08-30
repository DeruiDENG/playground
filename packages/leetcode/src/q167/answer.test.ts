import { twoSum } from './answer';

describe('q167', function() {
  it('should work for simple case', function() {
    const input = [2, 7, 11, 15];
    const input2 = 9;
    const output = [1, 2];
    expect(twoSum(input, input2)).toEqual(output);
  });
});
