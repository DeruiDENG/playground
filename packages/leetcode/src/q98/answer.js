// @ts-check

/**
 * @typedef TreeNode
 * @prop {number} val
 * @prop {TreeNode} [left]
 * @prop {TreeNode} [right]
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) {
    return true;
  }

  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    const { left, right, val } = node;
    if (left) {
      if (!validateAllNodes(left, node => node.val < val)) {
        return false;
      }

      if (left.left || left.right) {
        queue.push(left);
      }
    }

    if (right) {
      if (!validateAllNodes(right, node => node.val > val)) {
        return false;
      }

      if (right.left || right.right) {
        queue.push(right);
      }
    }
  }

  return true;
};

/**
 *
 * @param {TreeNode} treeRoot
 * @param {(node:TreeNode)=>boolean} isValidate
 */
function validateAllNodes(treeRoot, isValidate) {
  const queue = [treeRoot];
  while (queue.length) {
    const node = queue.shift();
    if (isValidate(node) === false) {
      return false;
    }

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return true;
}

export { isValidBST };
