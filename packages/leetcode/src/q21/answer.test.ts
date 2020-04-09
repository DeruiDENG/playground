import { mergeTwoLists } from './answer';

describe('q21', function() {
  type ListNode = import('./answer').ListNode;
  function buildListNode(input: number[]): ListNode {
    let result: ListNode = null;
    for (let i = input.length - 1; i >= 0; i--) {
      const val = input[i];
      result = {
        val,
        next: result,
      };
    }

    return result;
  }

  it('should work for 1->2->4, 1->3->4', function() {
    const input1 = [1, 2, 4];
    const input2 = [1, 3, 4];
    const result = [1, 1, 2, 3, 4, 4];
    expect(mergeTwoLists(buildListNode(input1), buildListNode(input2))).toEqual(
      buildListNode(result)
    );
  });
});
