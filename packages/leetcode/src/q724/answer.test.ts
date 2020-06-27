import { pivotIndex } from './answer';

describe('q724', function() {
  it('should work for simple case', function() {
    const input = [1, 7, 3, 6, 5, 6];
    const output = 3;
    expect(pivotIndex(input)).toEqual(output);
  });
});
