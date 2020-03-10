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
  updateNodeWithLongestDistanceToNode(root);
  return findLongestPath(root);
};

/**
 *
 * @param {TreeNode} node
 * @return {number} - longest distance to leaf
 */
function updateNodeWithLongestDistanceToNode(node) {
  const { left, right } = node;
  const leftDistance = left ? updateNodeWithLongestDistanceToNode(left) + 1 : 0;
  const rightDistance = right
    ? updateNodeWithLongestDistanceToNode(right) + 1
    : 0;
  const longestPathToLeaf = Math.max(leftDistance, rightDistance);
  node.longest = leftDistance + rightDistance;
  return longestPathToLeaf;
}

/**
 *
 * @param {TreeNode} treeRoot
 * @return {number}
 */
function findLongestPath(treeRoot) {
  const leftMax = treeRoot.left ? findLongestPath(treeRoot.left) : 0;
  const rightMax = treeRoot.right ? findLongestPath(treeRoot.right) : 0;
  const selfMax = treeRoot.longest;
  return Math.max(leftMax, rightMax, selfMax);
}
