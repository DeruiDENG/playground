// @ts-check

/**
 * @typedef TreeNode
 * @prop {number} val
 * @prop {TreeNode} [left]
 * @prop {TreeNode} [right]
 */

/**
 * @typedef Task
 * @prop {TreeNode} node
 * @prop {number} lower
 * @prop {number} upper
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) {
    return true;
  }

  /**
   * @type {Task[]}
   */
  const queue = [{ node: root, lower: -Infinity, upper: Infinity }];
  while (queue.length) {
    const { node, upper, lower } = queue.shift();
    const { left, right } = node;
    if (node.val < lower || node.val > upper) {
      return false;
    }

    if (left) {
      queue.push({ node: left, lower, upper: node.val });
    }

    if (right) {
      queue.push({ node: right, lower: node.val, upper });
    }
  }

  return true;
};

export { isValidBST };
