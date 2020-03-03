import { merge } from './sorted-merge-lcci';

describe('sorted-merge-lcci', () => {
  it('should work for `[1, 2, 3, 0, 0, 0]`', () => {
    const A = [1, 2, 3, 0, 0, 0],
      m = 3,
      B = [2, 5, 6],
      n = 3;
    const expected = [1, 2, 2, 3, 5, 6];
    merge(A, m, B, n);
    expect(A).toEqual(expected);
  });

  it('should work for `0]`', () => {
    const A = [0],
      m = 0,
      B = [1],
      n = 1;
    const expected = [1];
    merge(A, m, B, n);
    expect(A).toEqual(expected);
  });

  it('should work for `[2, 0]`', () => {
    const A = [2, 0],
      m = 1,
      B = [1],
      n = 1;
    const expected = [1, 2];
    merge(A, m, B, n);
    expect(A).toEqual(expected);
  });
});
