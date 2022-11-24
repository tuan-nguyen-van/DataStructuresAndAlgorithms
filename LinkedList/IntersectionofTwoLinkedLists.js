function ListNode(val) {
  this.val = val;
  this.next = null;
}

const listAB8 = new ListNode(8);
const listAB4 = new ListNode(4);
const listAB5 = new ListNode(5);

listAB8.next = listAB4;
listAB4.next = listAB5;

const listARoot = new ListNode(4);
const listA1 = new ListNode(1);

listARoot.next = listA1;
listA1.next = listAB8;

const listBRoot = new ListNode(5);
const listB6 = new ListNode(6);
const listB1 = new ListNode(1);

listBRoot.next = listB6;
listB6.next = listB1;
listB1.next = listAB8;

// Solution for O(m+n) and space is O(1);
// We know that the length of list A and list B is might be different.
// If we minus the length different . Lets say listA is less than listB 1 for length.
// So we could run list B for different in length first then start list A.
// So eventually they will meet at the same intersection point or null if they do
// not have intersection point.
// So we can loop through both of list A and list B.
// If list A reach the end (null) first then set the list A pointer to head of list B
// So it will run the different in length first.
// When list B reach the end (null) then we the list B pointer to the head of list A
// So it will run after list A at exact length different time.
var getIntersectionNode = function (headA, headB) {
  let l1 = headA,
    l2 = headB;
  while (l1 !== l2) {
    if (l1 === l2) return l1;
    l1 = l1 ? l1.next : headB;
    l2 = l2 ? l2.next : headA;
  }
  return l1;
};

console.log(getIntersectionNode(listARoot, listBRoot));
