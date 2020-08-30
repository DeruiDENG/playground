import { arrayPairSum } from './answer';

describe('q561', function() {
  it('should work for simple case', function() {
    const input = [1, 4, 3, 2];
    const output = 4;
    expect(arrayPairSum(input)).toEqual(output);
  });
});
