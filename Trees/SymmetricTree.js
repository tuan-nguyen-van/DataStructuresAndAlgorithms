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
 * @return {boolean}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node2Left = new TreeNode(2, node3, node4);
const node2Right = new TreeNode(2, node4, node3);
const root = new TreeNode(1, node2Left, node2Right);

// Time is big O(n)  and space is big O(height of the tree)
// var isSymmetric = function (root) {
//   // Base case is when root or node is undefined or 0 or null.
//   if (!root) {
//     return true;
//   }
//   // Run recursive function with the left and right of the root node
//   return isMirror(root.left, root.right);
// };

// function isMirror(leftNode, rightNode) {
//   // If the left node and right node is null or undefined then we know that we are traversing
//   // to the end of the branch of tree. So we can safely return true here.
//   if (!leftNode && !rightNode) {
//     return true;
//   }

//   // If the value of leftNode and right Node not null and not equal then return false;
//   if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
//     return false;
//   }

//   //Other wise we continue to check the leftNode.right with rightNode.left and leftNode.left with rightNode.right
//   return isMirror(leftNode.right, rightNode.left) && isMirror(leftNode.left, rightNode.right);
// }

// Solution number 2: Iterative approach.
// We maintain 2 stacks for left node and right node to process one at a time.
// And return whenever have a mismatch.
var isSymmetric = function (root) {
  if (!root) {
    return false;
  }
  return isMirror(root.left, root.right);
};

function isMirror(leftNode, rightNode) {
  // Create 2 stacks to store leftStack and rightStack for checking.
  const s1 = [leftNode],
    s2 = [rightNode];

  while (s1.length || s2.length) {
    const n1 = s1.pop();
    const n2 = s2.pop();
    // The base case to return is both node is null
    if (!n1 && !n2) {
      continue;
    }
    // If there a mismatch then return false
    if (!n1 || !n2 || n1.val !== n2.val) {
      return false;
    }

    // Scan the first tree from left to right.
    // Then scan the right tree from right to left.
    s1.push(n1.left);
    s1.push(n1.right);
    s2.push(n2.right);
    s2.push(n2.left);
  }

  return true;
}

console.log(isSymmetric(root));
