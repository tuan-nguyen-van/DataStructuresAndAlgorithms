/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// Solution
// We could use back tracking solution like the image attached
// or We use bottom up approach with dynamic programming.
// like this.
// we start at the last position
// At each index we check inside each of the word(w) inside wordDict
// If at the string i + w.len <= s.length and s.slice(i, i+ w.len) === w
// dp[i] = dp[i + w.length] because if the previous string from i -> i + w.length
// does not have dp[] = true then still cannot seperate substring that match wordDic
// index 8 is the base case so if the s length is 8 and some word inside wordDict match with
// length also 8 we'll be able to return true;
// index 7. dp[7] = false "e" does not have any match inside wordDict.
// index 6 have a match. dp[6] = dp[6 + w.length] = dp[6 + 2] = dp[8] = true;
// index 5. dp[5] = fasle
// index 4 have a match. dp[4] = dp[4 + w.length] = dp[4 + 4] = dp[8] = true;
// index 3 check each w inside wordDict we see that does  have a word match "tco"
// 'tco' => dp[3] = dp[3 + 3] = dp[6] = true;
// index 2 check each w see no match.
// index 1 no match
// index 0 have a match 'leet'
// So dp[0] = dp[0 + w.length] = dp[0 + 4] = dp[4] = true;
// So in the end just return dp[0].
var wordBreak = function (s, wordDict) {
  const dp = {};
  // Initialize the base case
  dp[s.length] = true;
  // Loop through i from end to beginning
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = false; // Initialize as false first.
    for (w of wordDict) {
      //Must pass the condition before checking dp[i + s.length]
      if (i + w.length <= s.length && w === s.slice(i, i + w.length)) {
        dp[i] = dp[i + w.length];
        // If have a match then break the current loop
        if (dp[i]) break;
      }
    }
  }
  return dp[0];
};

console.log(wordBreak("leetcodde", ["leet", "code", "de", "tco"]));
