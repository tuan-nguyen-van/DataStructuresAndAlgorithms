function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node2 = new Node(2, node4, node5);
const node3 = new Node(3, node6, node7);
const node1 = new Node(1, node2, node3);

// Solution.
//                          1 -->null
//                       /    \
//                      2 ----> 3 -->null
//                     / \     /  \
//                    4-->5-->6 --->7 -->null
// We could use dfs for this problem because we can use the next pointer to determine
// When we at node 1 we could point the left node (2) to the right node (3)
// Next when we at node 2 we could point the left node (4) to the right node (5)
// How we point node 5 to node 6.
// Because at node 2 we could access node 3 by the next pointer
// So at node 2 we could do something like this node2.right.next = node2.next.left
// Time complexity here is O(n) and space complexity is O(n) because of the call stack.

// Solution number 2:
// Use BFS with constant extra memory O(1)
// With BFS we often need to use stack to remember the level of the nodes.
// So it will caused extra memory.
// But this problem is very unique because we have perfect binary tree.
// So we don't even need queue to keep track of the level we're in.
// We keep track by only the next node var.
// I.e at node 1 we point root.next = null.
// The next node = root.left;
// Then we point root.left.next = root.right;
// Then we point root.right = null.

// Then we can change the cur = next;
// Then next  = cur.left;
// Now we at node 2.
// We point node2.left.next = node2.right
// Then we could check if node2.next exist then change cur.right.next = cur.next.left.
// Then we could change the cur because cur.next exist so we change cur = cur.next
// Then we point cur.left.next = cur.right
// Change the cur = cur.next then check the cur have value or not.

// We could loop through nodes until the next have value and the cur have value.

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let cur = root;
  let next = cur ? cur.left : null;
  while (cur && next) {
    cur.left.next = cur.right;
    if (!cur.next) {
      cur.next = null;
      cur = next;
      next = cur.left;
    } else {
      cur.right.next = cur.next.left;
      cur = cur.next;
    }
  }
  return root;
};

console.log(connect(node1));
