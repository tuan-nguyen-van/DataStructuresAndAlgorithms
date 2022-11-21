/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Solution: recursive force.
// For this case [-12, -10, -3, 0, 4, 6, 8]
// We take the initial array and take the middle as the root. So all the elements from the right
// have value more then middle element. And all elements on the left have value less than middle element.
// Then set the middle as the root node.
// The root.right is by we continue for the right sub array by slice the original array [4, 6, 8]. Then push 6 Then continue with [4] then [8]
// The root.left is by Then we continue for the left sub array by slice the original array [-12, -10, -3]. then push -10 then continue with [-12] [-3]
// The base case to return here is when nums.length is 0.

// Another solution is we could use subarray by leftPointer and rightPointer to determine the subarray
// The basecase is when the leftPointer > rightPointer. But this solution time complexity is the same as above
// Moving the pointer around cause time is O(2n) same as slice array method.

// Time complexity is O(n) and space is O(n)
var sortedArrayToBST = function (nums) {
  if (!nums.length) {
    return null;
  }
  const middle = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middle]);
  root.left = sortedArrayToBST(nums.slice(0, middle));
  root.right = sortedArrayToBST(nums.slice(middle + 1));
  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
