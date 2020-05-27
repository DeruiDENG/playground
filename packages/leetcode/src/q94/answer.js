// @ts-check

/**
 * @typedef TreeNode
 * @prop {number} val
 * @prop {TreeNode|null} left
 * @prop {TreeNode|null} right
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  /**
   *
   * @type {TreeNode[]}
   */
  const stack = [];
  /**
   *
   * @type {number[]}
   */
  const results = [];

  let current = root;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    results.push(current.val);
    current = current.right; // if right is null, then next round will pop current.parent, otherwise, will transverse right nodes, which is expected.
  }

  return results;
};
