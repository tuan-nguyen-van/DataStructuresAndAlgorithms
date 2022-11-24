function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node3 = new ListNode(3);
const node4 = new ListNode(4, node3);
const node2 = new ListNode(2, node4);
const l1 = new ListNode(7, node2);

const node5 = new ListNode(5);
const node4l2 = new ListNode(4, node5);
const node6 = new ListNode(6, node4l2);
const l2 = new ListNode(5, node6);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode();
  let dummy = result;
  let carry = 0;
  while (l1 || l2) {
    val1 = l1 ? l1.val : 0;
    val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    dummy.next = new ListNode(sum % 10);
    dummy = dummy.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry === 1) {
    dummy.next = new ListNode(1);
  }

  return result.next;
};

console.log(addTwoNumbers(l1, l2));
