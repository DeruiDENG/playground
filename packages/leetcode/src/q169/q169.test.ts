import { majorityElement } from './q169';

describe('q169', () => {
  it('should work for `[3, 2, 3]`', () => {
    const input = [3, 2, 3];
    const output = 3;
    const result = majorityElement(input);
    expect(result).toBe(output);
  });

  it('should work for `[2,2,1,1,1,2,2]`', () => {
    const input = [2, 2, 1, 1, 1, 2, 2];
    const output = 2;
    const result = majorityElement(input);
    expect(result).toBe(output);
  });
});
