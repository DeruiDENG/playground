// @ts-check
/**
 * @typedef TreeNode
 * @prop {number} val
 * @prop {TreeNode} [left]
 * @prop {TreeNode} [right]
 */

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (isSameTree(s, t)) {
    return true;
  }

  if (!s) {
    return false;
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isSameTree(s, t) {
  if (!s && !t) {
    return true;
  }

  if ((!s && t) || (s && !t)) {
    return false;
  }

  return (
    s.val === t.val &&
    isSameTree(s.left, t.left) &&
    isSameTree(s.right, t.right)
  );
}

export { isSubtree };
