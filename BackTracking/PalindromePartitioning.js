/**
 * @param {string} s
 * @return {string[][]}
 */

// Solution use backtracking (dfs)
// See the diagram attached as png
// Time complexity is at least O(2^n). space is at least O(n)
var partition = function (s) {
  const result = [];
  const partitions = [];
  const length = s.length;
  dfs(0);
  return result;

  function dfs(i) {
    // The base case to return is when i is equal the length
    if (i == s.length) {
      result.push([...partitions]);
    }
    // Other wise Loop through the remaining string and perform dfs
    // for all possible substring.
    for (let j = i; j < length; j++) {
      // If the string from i to j is a palindrome
      if (checkPalindrome(s, i, j)) {
        partitions.push(s.slice(i, j + 1));
        dfs(j + 1);
        partitions.pop();
      }
    }
  }

  function checkPalindrome(s, l, r) {
    while (l <= r) {
      if (s[l] !== s[r]) {
        return false;
      }
      l++, r--;
    }
    return true;
  }
};

console.log(partition("aaba"));
