function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node15 = new TreeNode(15);
const node7 = new TreeNode(7);
const node20 = new TreeNode(20, node15, node7);
const node9 = new TreeNode(9);
const node3 = new TreeNode(3, node9, node20);

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// Solution: Use bread first search with queue to keep track of the current level.
// For this type of tree
//                      3                queue = [3,9,20];
//                    /   \
//                   9     20            queue = [9,20,15,7];
//                        /  \
//                      15    7          queue = [15,7,8];
//                     /
//                    8                  queue = [8];
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [];
  const result = [];
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    const curLevel = [];
    for (let i = 0; i < length; i++) {
      currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      curLevel.push(currentNode.val);
    }
    result.push(curLevel);
  }
  return result;
};
console.log(levelOrder(node3));
