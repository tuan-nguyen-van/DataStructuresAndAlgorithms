function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var node5 = new ListNode(5);
var node4 = new ListNode(4, node5);
var node3 = new ListNode(3, node4);
var node2 = new ListNode(2, node3);
var head = new ListNode(1, node2);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Solution:
// Iteratively.
// var reverseList = function (head) {
//   let prev = null;
//   let next = head;
//   while (next) {
//     const temp = next.next;
//     next.next = prev;
//     prev = next;
//     next = temp;
//   }
//   return prev;
// };

// console.log(reverseList(head));

// Solution: recursively.
// Just like iteratively solution.
// We write a function recursively reverseTwoNodes
// We maintain two variable to hold two nodes.
// Then we point the next pointer to previous.
// Then run reverseTwoNodes(next, next.next = temp)
// The base case is when the next node is null.
// Then run the recursive function until the next node is null
// Then we return the pre node;
var reverseList = function (head) {
  return reverseTwoNodes(null, head);

  function reverseTwoNodes(pre, next) {
    if (!next) {
      return pre;
    }
    const temp = next.next;
    next.next = pre;
    return reverseTwoNodes(next, temp);
  }
};

console.log(reverseList(head));
