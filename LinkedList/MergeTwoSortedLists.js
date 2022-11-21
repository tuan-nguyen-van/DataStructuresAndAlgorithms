/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Solution:
// Possible cases: list 1: [1, 2, 4], list 2: [2, 3, 4, 5, 6].
// We just create first dummy linked list from new ListNode() then 
// run the while loop through list1 and list 2 as long as list1 and list2 still have value (#0)
// we compare value of list1.val and list2.val to see which one is smaller.
// Then we add the smaller value to dummy.
// When either list1 or list2 run out of node then we check which list still have node remained (list2)
// Then we add all the remained node of list 2 to our dummy list.
// We return the dummy.next
var mergeTwoLists = function(list1, list2) {
  var dummy = { val : -1, next : null };
  var head = dummy;
  while (list1 && list2) {
      if (list1.val > list2.val) {
          head.next = list2;
          list2 = list2.next;
      } else {
          head.next = list1;
          list1 = list1.next;
      }
      head = head.next;
  }
  head.next = list1 || list2;
  
  return dummy.next;
};