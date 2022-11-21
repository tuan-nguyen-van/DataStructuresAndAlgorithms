/**
 * @param {string[]} strs
 * @return {string}
 */

// The brute force is the only way to go.
// Then we loop through the length of the first string with i from 0 to length
// Then we loop through each string
// If the current string [i] does not contain the current character firstString[i]
// Then we return the result
// If all string pass we push the current char to the result.
// Time complexity is O(n^2) Space is O(m) if we count the result 
// Or O(1) if we do not count the result.

var longestCommonPrefix = function (strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    console.log(char);
    for (let str of strs) {
      if (str[i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
