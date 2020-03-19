import { getLeastNumbers } from './answer';

describe('answer for i40', () => {
  it('should work for `[3, 2, 1]`', () => {
    const arr = [3, 2, 1];
    const k = 2;
    const expected = [1, 2];
    const result = getLeastNumbers(arr, k);
    expect(expected).toEqual(result);
  });
});
