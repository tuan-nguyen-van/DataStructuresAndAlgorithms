/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//Solution:
// For this kind of node
//           1
//         /   \
//        4     2
//       / \   / \
//      7   8 3   5
// For recursive feature
// We traverse the tree all the way to the left side first
// until the node is not existed is the base case
// Other wise push the current node value
// Then traverse to the right

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// var node3 = new TreeNode(3);
// var node5 = new TreeNode(5);
// var node2 = new TreeNode(2, node3, node5);
// var node7 = new TreeNode(7);
// var node8 = new TreeNode(8);
// var node4 = new TreeNode(4, node7, node8);
// var root = new TreeNode(1, node4, node2);

// var inorderTraversal = function (root) {
//   const res = [];

//   inOrder(root);
//   return res;

//   function inOrder(node) {
//     if (!node) {
//       return;
//     }
//     inOrder(node.left);
//     res.push(node.val);
//     inOrder(node.right);
//   }
// };

// console.log(inorderTraversal(root));

// Solution number 2 Iteratively
// We keep a stack to process each node like this
// For this kind of node
//           1
//         /   \
//        4     2
//       / \   / \
//      7   8 3   5
//       \
//        9
// Stack to keep track of the node we need to process from top to bottom
//
//
//
//
//
//  7 -> left most node so remove 7 then process the right node (9) and push it to the stack
//  4
//  1

//
//  9 -> Check all the way through the left node of 9. Empty .
//  4    Then check the right node of 9 do not have any so process to 4
//  1    Process the right node of 4 so we have 8 check the left and right of node 8

// Then process the node 1 Check the right of node 1 is 2 then push 2 to the stack.
// Then check the left node of 2 then push 3 to the stack
// Then process the node 2. Then check the right node of 2 is 5 then push 5 to the stack
// The result is [7, 9, 4, 8, 1, 3, 2, 5]

var node3 = new TreeNode(3);
var node5 = new TreeNode(5);
var node2 = new TreeNode(2, node3, node5);
var node9 = new TreeNode(9);
var node7 = new TreeNode(7, undefined, node9);
var node8 = new TreeNode(8);
var node4 = new TreeNode(4, node7, node8);
var root = new TreeNode(1, node4, node2);

//Time is O(n) and space is also O(n)
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  cur = root;
  while (cur || stack.length) {
    // Traverse all the way through the left of the current node
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    // When the node left is null then we start to process the stack from top
    // After that we process the right node of the current node the same
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};

console.log(inorderTraversal(root));
