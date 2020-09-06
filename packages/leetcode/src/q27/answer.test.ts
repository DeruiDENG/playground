import { removeElement } from './answer';

describe('q27', function() {
  it('should work for simple case', function() {
    const input1 = [3, 2, 2, 3];
    const input2 = 3;
    const output = [2, 2];
    const removedCount = removeElement(input1, input2);
    expect(removedCount).toEqual(2);
    expect(input1.slice(0, output.length)).toEqual(output);
  });

  it('should work for simple case 2', function() {
    const input1 = [0, 1, 2, 2, 3, 0, 4, 2];
    const input2 = 2;
    const output = [0, 1, 3, 0, 4];
    const removedCount = removeElement(input1, input2);
    expect(removedCount).toEqual(output.length);
    expect(input1.slice(0, output.length)).toEqual(output);
  });

  it('should work for simple case 3', function() {
    const input1: number[] = [];
    const input2 = 2;
    const output: number[] = [];
    const removedCount = removeElement(input1, input2);
    expect(removedCount).toEqual(output.length);
    expect(input1.slice(0, output.length)).toEqual(output);
  });

  it('should work for simple case 4', function() {
    const input1 = [2, 2];
    const input2 = 2;
    const output: number[] = [];
    const removedCount = removeElement(input1, input2);
    expect(removedCount).toEqual(output.length);
    expect(input1.slice(0, output.length)).toEqual(output);
  });
});
