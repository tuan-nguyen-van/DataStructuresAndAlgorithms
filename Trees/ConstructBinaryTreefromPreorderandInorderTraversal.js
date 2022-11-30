function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// Solution
// preorder = [3,9,20,15,7] is traverse from top to left and right recursively,
// inorder = [9,3,15,20,7] is traverse from left to top then to right recursively.
// Need to build this tree
//            3
//           / \
//          9   20
//              / \
//             15  7
// First item in the preorder is always the root (3)
// Inside the inorder we could check the index of 3 (middle).
// Inside the inorder array all item [9] on the left of middle (3) will belong to the
// left branch
// all the item on the right [15, 20, 7] of middle (3) will belong to the right branch.
// Inside the preorder array except the first item (3) . The next item from [0] to the middle
// is belong to the left branch.
// And the number of items from middle + 1 to the end will belong to the right branch.

// Since we know the total number of node for left branch is from 0 to middle (middle -0 = middle)
// And the numer of total number of node for the right branch is from middle +1 to the end.

// So we could slice the preorder array to pass to the recursive function.

// So we could slice the array and pass the preorder and inorder array to buildTree
// again to run recursively.
// For example to build the right branch of node 3 we call buildTree([20,15,7], [15,20,7])
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const newParentNode = new TreeNode(preorder[0]);
  const middle = inorder.indexOf(preorder[0]);
  newParentNode.left = buildTree(
    preorder.slice(1, middle + 1),
    inorder.slice(0, middle)
  );
  newParentNode.right = buildTree(
    preorder.slice(middle + 1),
    inorder.slice(middle + 1)
  );
  return newParentNode;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
