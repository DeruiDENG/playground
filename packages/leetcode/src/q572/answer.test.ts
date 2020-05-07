import { isSubtree } from './answer';

describe('q572', function() {
  it('should work for simple test case', function() {
    const input = {
      val: 3,
      left: {
        val: 4,
        left: {
          val: 1,
        },
        right: { val: 2 },
      },
      right: {
        val: 5,
      },
    };

    const input2 = { val: 4, left: { val: 1 }, right: { val: 2 } };
    expect(isSubtree(input, input2)).toBe(true);
  });

  it('should work for simple test case 2', function() {
    const input = {
      val: 1,
    };

    const input2 = { val: 0 };
    expect(isSubtree(input, input2)).toBe(false);
  });
});
