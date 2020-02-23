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
  const num1 = listNodeToNumber(l1);
  const num2 = listNodeToNumber(l2);
  return numberToListNode(num1 + num2);
};

/**
 *
 * @param {ListNode} listNode
 * @return {number}
 */
function listNodeToNumber(listNode) {
  const numbers = [];
  while (true) {
    numbers.push(listNode.val);
    if (listNode.next === null) {
      return Number.parseInt(numbers.reverse().join(''), 10);
    }

    listNode = listNode.next;
  }
}

/**
 *
 * @param {number} number
 * @return {ListNode}
 */
function numberToListNode(number) {
  const digits = number
    .toString()
    .split('')
    .map(digit => parseInt(digit, 10));
  let listNode = null;
  for (const digit of digits) {
    listNode = {
      val: digit,
      next: listNode,
    };
  }

  return listNode;
}
