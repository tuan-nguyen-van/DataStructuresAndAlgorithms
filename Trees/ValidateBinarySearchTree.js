function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node1 = new TreeNode(1);
const node6 = new TreeNode(3);
const node8 = new TreeNode(6);
const node7 = new TreeNode(4, node6, node8);
const root = new TreeNode(5, node1, node7);
// console.log(root);
// Solution:
// With brute force we could use dfs for every node
// Check if all the left node is less than the current node
// And all right node must be greater than the current node
// Then we check the next node, check left and right node.
// For every nodes we need to check every other nodes.
// So the time complexity is O(n^2) so is not very efficient.

// With linear force.
// We could do better like this diagram by set the range limit for each node.
// And we could do it in one pass
//
//                      5(-inf,+inf)
//                    /   \
//           (-inf,5)1      7(5,+inf)
//                        /   \
//                  (5,7)6     8(7,+inf)
//
// We use recursive function first check the root with the range is (-inf,+inf) (left,right)
// Other node if we traverse to left node then update the range to (left,curVal)
// If we traverse to right node then update the range to (curVal,right)

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  function validNode(node, leftLimit, rightLimit) {
    if (!node) {
      return true;
    }
    if (node.val <= leftLimit || node.val >= rightLimit) {
      return false;
    }
    return (
      validNode(node.left, leftLimit, node.val) &&
      validNode(node.right, node.val, rightLimit)
    );
  }
  return validNode(root, -Infinity, +Infinity);
};

console.log(isValidBST(root));
