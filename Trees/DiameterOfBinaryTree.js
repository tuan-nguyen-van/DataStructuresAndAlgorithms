function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node2 = new TreeNode(2, node4, node5);
const node3 = new TreeNode(3);
const root = new TreeNode(1, node2, node3);

/**
 * @param {TreeNode} root
 * @return {number}
 */
// To solve this question in O(n) time we need to use 
// bottom up approach like inside the image.
// Time is O(n) and Space is O(n)
var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  function dfs(root) {
    if (!root) return -1;
    const leftHeight = dfs(root.left);
    const rightHeight = dfs(root.right);
    diameter = Math.max(diameter, 2 + leftHeight + rightHeight);
    // Return the height of the node.
    return 1 + Math.max(leftHeight,rightHeight);
  }
  dfs(root);
  return diameter;
};

console.log(diameterOfBinaryTree(root));