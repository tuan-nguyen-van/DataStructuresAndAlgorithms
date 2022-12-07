function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node4 = new ListNode(4, null);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
  const dummy = new ListNode(0, head);
  let cur = head;
  let pre = dummy;
  // Current.next to check if exist new pair or not.
  while (cur && cur.next) {
    const second = cur.next;
    const nextPair = second.next;

    pre.next = second;
    second.next = cur;
    cur.next = nextPair;

    pre = cur;
    cur = nextPair;
  }
  return dummy.next;
};

console.log(swapPairs(node1));
