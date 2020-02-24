// @ts-check

/**
 * @typedef ListNode
 * @prop {number} val
 * @prop {ListNode|null} next
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = function(l1, l2) {
  /**
   * @type {ListNode}
   */
  const result = {
    val: 0,
    next: null,
  };
  let ptr = result;
  while (l1 !== null || l2 !== null) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;
    const total = ptr.val + l1Val + l2Val;
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;

    ptr.val = total % 10;
    if (total >= 10 || l1 || l2) {
      ptr.next = {
        val: total >= 10 ? 1 : 0,
        next: null,
      };
      ptr = ptr.next;
    }
  }

  return result;
};
