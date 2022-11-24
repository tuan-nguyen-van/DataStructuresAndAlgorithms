function ListNode(val) {
  this.val = val;
  this.next = null;
}

const root = new ListNode(3);
const node2 = new ListNode(2);
const node0 = new ListNode(0);
const node4Negative = new ListNode(-4);
root.next = node2;
node2.next = node0;
node0.next = node4Negative;
// node4Negative.next = node2;

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// There are two ways to solve this problem in linear time
// Solution 1 we use hash table (new Map()) in javascript
// to store the nodes that traverse through.
// For each traverse node we check that the node is existed inside the hash table or not.
// If the nodes existed inside the hash table then we return true;
// Otherwise is reach null then it's the end of the linked list so we return false;
// Time is O(n) and space is also O(n)
// var hasCycle = function (head) {
//   const nodeSet= new Set();
//   let curNode = head;
//   while (curNode) {
//     if (nodeSet.has(curNode)) {
//       return true;
//     }
//     nodeSet.add(curNode, true);
//     curNode = curNode.next;
//   }
//   return false;
// };

// console.log(hasCycle(root));

//The second solution is we use tortoise and hare technique.
// we maintain two pointer fast and slow (fast move by 2, slow move by 1)
// Basically if the linked list is circle then the slow pointer will eventually catch
// up with the fast pointer.

var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    // fast.next in case the linked list contains only 1 node.
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }

  return false;
};

console.log(hasCycle(root));
