import { searchInsert } from './answer';

describe('q35', function() {
  it('should work for simple case', function() {
    const input1 = [1, 3, 5, 6];
    const input2 = 5;
    const output = 2;
    expect(searchInsert(input1, input2)).toEqual(output);
  });

  it('should work for simple case 2', function() {
    const input1 = [1, 3, 5, 6];
    const input2 = 2;
    const output = 1;
    expect(searchInsert(input1, input2)).toEqual(output);
  });

  it('should work for simple case 3', function() {
    const input1 = [1, 3, 5, 6];
    const input2 = 7;
    const output = 4;
    expect(searchInsert(input1, input2)).toEqual(output);
  });

  it('should work for simple case 4', function() {
    const input1 = [1, 3, 5, 6];
    const input2 = 0;
    const output = 0;
    expect(searchInsert(input1, input2)).toEqual(output);
  });
});
