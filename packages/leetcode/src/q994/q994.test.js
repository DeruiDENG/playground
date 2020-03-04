import { orangesRotting } from './q994';

describe('q994', () => {
  it('should work for `[[2,1,1],[1,1,0],[0,1,1]]`', () => {
    const testCase = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ];
    const expected = 4;
    const result = orangesRotting(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `[[2,1,1],[0,1,1],[1,0,1]]`', () => {
    const testCase = [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ];
    const expected = -1;
    const result = orangesRotting(testCase);
    expect(result).toBe(expected);
  });

  it('should work for `[[0,2]]`', () => {
    const testCase = [[0, 2]];
    const expected = 0;
    const result = orangesRotting(testCase);
    expect(result).toBe(expected);
  });
});
