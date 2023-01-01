function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const node6 = new TreeNode(6);
const node9 = new TreeNode(9);
const node1 = new TreeNode(1);
const node3 = new TreeNode(3);
const node7 = new TreeNode(7, node6, node9);
const node2 = new TreeNode(2, node1, node3);
const root = new TreeNode(4, node2, node7);

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// Solution we could use dfs iteratively or recursively to solve this problem. 
// Just swap the position of the left and the right node until run out of node.

//Solution recursively Time O(n) space is also O(n)
// var invertTree = function (root) {
//   if (root === null) {
//     return root;
//   }

//   const temp = root.left;
//   [root.left, root.right]= [root.right, temp];

//   invertTree(root.left);
//   invertTree(root.right);
//   return root;
// };


//Solution iteratively using DFS with stack. 
// var invertTree = function (root) {
//   const stack = [root];
//   while(stack.length) {
//     const node = stack.pop();
//     if (node !== null) {
//       const temp = node.left;
//       [node.left, node.right] = [node.right, temp];
//       stack.push(node.left, node.right);
//     }
//   }
//   return root;
// };

//Solution iteratively using BFS with queue. 
var invertTree = function (root) {
  const queue = [root];
  while(queue.length) {
    const node = queue.shift();
    if (node !== null) {
      const temp = node.left;
      [node.left, node.right] = [node.right, temp];
      queue.push(node.left, node.right);
    }
  }
  return root;
};



console.log(invertTree(root));
