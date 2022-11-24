//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// const node6 = new ListNode(6);
// const node5 = new ListNode(5, node6);
// const node4 = new ListNode(4, node5);
// const node3 = new ListNode(3, node4);
const node2 = new ListNode(2);
const node1 = new ListNode(1, node2);

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Solution: In one pass.
// We need to maintain two pointers slow and fast. the fast pointer traverse nth time before the slow
// So when the fast reach the end then the slow will be at the before deleted node. 
// In case 1 -> 2 -> 3 -> 4 -> 5 -> null
// n = 2             S            F
// n could be 1 to 5.
// If n = 5 then we need to delete node = 1 and return node from  2 -> ...
// If n = 2 then we need to delete node 4 and return node 1235
// so we need to set the left pointer left.next = left.next.next.
// So we could not start the left from the beginning because if n = 5 then we need to delete the left
// So we could start left pointer from the dummy node 0 -> head.
// So the node look like this 0->1->2->3->4->5->null
// And the right pointer from the beginning of the linked list. 
// Then move the right pointer nth times from the beginning.
// Then traverse left and right until right node is null.
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head);
  let left = dummy;
  let right = head;

  while (n > 0) {
    right = right.next;
    n -= 1;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return dummy.next;

};

console.log(removeNthFromEnd(node1, 2));
