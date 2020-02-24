// @ts-check
import { addTwoNumbers } from './question';

describe('quesitons', () => {
  it('should work', () => {
    const l1 = buildListNodeFromTestCase([2, 4, 3]);
    const l2 = buildListNodeFromTestCase([5, 6, 4]);
    const result = addTwoNumbers(l1, l2);
    expect(result).toEqual({
      val: 7,
      next: { val: 0, next: { val: 8, next: null } },
    });
  });
  it('should work for long list', () => {
    // prettier-ignore
    const l1 = buildListNodeFromTestCase([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    // prettier-ignore
    const l2 = buildListNodeFromTestCase([5, 6, 4]);
    // prettier-ignore
    const expected = buildListNodeFromTestCase([6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    const result = addTwoNumbers(l1, l2);
    expect(result).toEqual(expected);
  });
});

/**
 *
 * @param {number[]} inputs
 * @return {import('./question').ListNode}
 */
function buildListNodeFromTestCase(inputs) {
  let nodeList = null;
  for (const input of [...inputs].reverse()) {
    nodeList = {
      val: input,
      next: nodeList,
    };
  }

  return nodeList;
}
