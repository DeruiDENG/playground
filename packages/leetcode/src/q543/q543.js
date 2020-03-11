// @ts-check

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @typedef TreeNode
 * @prop {TreeNode} [left]
 * @prop {TreeNode} [right]
 * @prop {number} val
 * @prop {number} [longest] - longest path passing the node as root
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const diameterOfBinaryTree = function(root) {
  if (!root) {
    return 0;
  }
  updateWithLongestPathPassingNode(root);
  return root.longest;
};

/**
 *
 * @param {TreeNode} node
 * @return {number} - depth, which is the longest distance from current node to leaf
 */
function updateWithLongestPathPassingNode(node) {
  const { left, right } = node;
  const leftDepth = left ? updateWithLongestPathPassingNode(left) + 1 : 0;
  const rightDepth = right ? updateWithLongestPathPassingNode(right) + 1 : 0;
  const currentNodeDepth = Math.max(leftDepth, rightDepth);
  node.longest = Math.max(
    leftDepth + rightDepth,
    left ? left.longest : 0,
    right ? right.longest : 0
  );
  return currentNodeDepth;
}
