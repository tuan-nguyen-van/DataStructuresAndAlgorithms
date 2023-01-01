/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Time and space is O(2^target) in case candidates is all 1s
var combinationSum = function (candidates, target) {
  const res = [];
  function dfs(i, cur, total) {
    if (total === target) {
      res.push([...cur]);
      return;
    }
    if (i >= candidates.length || total > target) {
      return;
    }
    cur.push(candidates[i]);
    // Append the current index.
    dfs(i, cur, total + candidates[i]);
    cur.pop();
    // Do not append the current index.
    dfs(i + 1, cur, total);
  }

  dfs(0, [], 0);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
