import { updateMatrix } from './answer';

describe('q542', function() {
  it('should work for simple test case', function() {
    const input = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const output = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    expect(updateMatrix(input)).toEqual(output);
  });

  it('should work for advanced test case', function() {
    const input = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ];
    const output = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ];
    expect(updateMatrix(input)).toEqual(output);
  });
});
