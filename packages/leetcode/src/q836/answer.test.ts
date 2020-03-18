import { isRectangleOverlap } from './answer';

describe('answer', () => {
  it('should work for `[0, 0, 2, 2], [1, 1, 3, 3]`', () => {
    const rec1 = [0, 0, 2, 2];
    const rec2 = [1, 1, 3, 3];
    const expected = true;
    const result = isRectangleOverlap(rec1, rec2);
    expect(result).toBe(expected);
  });

  it('should work for `[0,0,1,1], [1,0,2,1]`', () => {
    const rec1 = [0, 0, 1, 1];
    const rec2 = [1, 0, 2, 1];
    const expected = false;
    const result = isRectangleOverlap(rec1, rec2);
    expect(result).toBe(expected);
  });
});
