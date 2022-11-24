function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1Last = new ListNode(1);
const node2After = new ListNode(2, node1Last);
const node3 = new ListNode(3, node2After);
const node2Before = new ListNode(2, node3);
const node1First = new ListNode(1, node2Before);

// Solution number 1:
// Push the linked list into an array then check that array is palindrome or not
// By two pointers technique

// var isPalindrome = function(head) {
//   let node = head;
//   const nodeVals = [];
//   while (node) {
//       nodeVals.push(node.val);
//       node = node.next;
//   }
//   let left = 0;
//   let right = nodeVals.length - 1;
//   while (left < right) {
//       if (nodeVals[left] !== nodeVals[right]) {
//           return false;
//       }
//       left++; right--
//   }
//   return true;
// };

// console.log(isPalindrome(node1First));

// Solution number 2:
// We have two cases that is valid palindrome
// [1,2,2,1] or [1,2,3,2,1]

// So first we need to go to the middle of the linked list by two pointer fast and slow technique
// [1,   2,   2,  1]
// F,S
//       S    F
//            S        F
// [1, 2, 3, 2, 1]
// FS
//    S   F
//        S      F

// Then we reverse the linked list from the slow pointer to the end of the list
//1->2->2<-1
//1->2->3      null<-2<-1

// Then we could start the comparison by looping through the second linked list

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse second half linked list from the slow pointer.
  // 3->2->1
  let pre = null;
  let next = slow;
  while (next) {
    const temp = next;
    next = temp.next;
    temp.next = pre;
    pre = temp;
  }

  const secondHalfLinkedList = pre;
  // Loop through until the pre or the head linked list node is null
  // Check value equal along the way.
  while (pre && head) {
    if (pre.val !== head.val) {
      return false;
    }
    pre = pre.next;
    head = head.next;
  }
  return true;
};

console.log(isPalindrome(node1First));
