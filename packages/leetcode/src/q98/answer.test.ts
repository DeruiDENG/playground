import { isValidBST } from './answer';

describe('q98', function() {
  it('should work for simple test case 1', function() {
    const input = {
      val: 5,
      left: {
        val: 1,
      },
      right: {
        val: 4,
        left: {
          val: 3,
        },
        right: {
          val: 6,
        },
      },
    };
    expect(isValidBST(input)).toBe(false);
  });

  it('should work for simple test case 2', function() {
    const input = {
      val: 2,
      left: {
        val: 1,
      },
      right: {
        val: 3,
      },
    };
    expect(isValidBST(input)).toBe(true);
  });
});
