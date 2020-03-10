import { diameterOfBinaryTree, TreeNode } from './q543';

describe('q543', () => {
  it('should work for `1`', () => {
    //       1
    //      / \
    //     2   3
    //    / \
    //   4   5
    const input: TreeNode = {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };
    const expected = 3;
    const result = diameterOfBinaryTree(input);
    expect(result).toBe(expected);
  });
});
