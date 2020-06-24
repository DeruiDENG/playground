import { floodFill } from './answer';

describe('q733', function() {
  it('should work for simple case', function() {
    const input = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];

    const params = [1, 1, 2] as const;

    floodFill(input, ...params);
    expect(input).toEqual([
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });
});
