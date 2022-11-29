/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Solution use dfs on this tree.
// [1,2,3] at each index we have two option to include 1 or not include 1, include 2 or not include 2...
// So the total number of way is 2.2.2 = 2^3 = 2^n 8
// So the time complexity is 0(nx2^n) Space is O(2^n)
//                             []
//                         /        \
//                       [1]           []         index 0 include 1 or not include 1
//                       / \           /   \
//                   [1,2]  [1]       [2]     []        index 1 include 2 or not include 2
//                   /  |    |   \     |  \     \   \
//            [1,2,3] [1,2] [1,3] [1] [2,3] [2]  [3] []   index 2 include 3 or not include 3
var subsets = function (nums) {
  const res = [];
  const subset = [];
  let i = 0;
  dfs(0);
  return res;
  function dfs(i) {
    // The base case
    if (i >= nums.length) {
      res.push([...subset]);
      return;
    }
    // Include the current index value
    subset.push(nums[i]);
    dfs(i + 1);
    // Not include the current index value.
    subset.pop();
    dfs(i + 1);
  }
};

console.log(subsets([1, 2, 3]));
