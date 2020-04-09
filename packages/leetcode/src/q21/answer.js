// @ts-check

/**
 * @typedef ListNode
 * @prop {number} val
 * @prop {ListNode} [next]
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  /**
   * @type {number[]}
   */
  const resultArray = [];
  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      resultArray.push(l2.val);
      l2 = l2.next;
    } else if (l2 === null) {
      resultArray.push(l1.val);
      l1 = l1.next;
    } else {
      const v1 = l1.val;
      const v2 = l2.val;
      if (v1 < v2) {
        resultArray.push(v1);
        l1 = l1.next;
      } else {
        resultArray.push(v2);
        l2 = l2.next;
      }
    }
  }

  /**
   *
   * @type {ListNode}
   */
  let result = null;
  for (const ele of resultArray.reverse()) {
    result = {
      val: ele,
      next: result,
    };
  }

  return result;
};

export { mergeTwoLists };
