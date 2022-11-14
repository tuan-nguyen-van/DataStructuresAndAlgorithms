// Solution:

// We loop through the string length.
// We could store the all the chars of the current substring to a set
// If the current char existed inside the set then we need to remove all chars inside the set
// from start to the s[i].
// The max chars could be calculated by the length of the set or right - startPosition + 1.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  let max = 0;
  let startPosition = 0;
  for (let i = 0; i < s.length; i++) {
    while (charSet.has(s[i])) {
      charSet.delete(s[startPosition]);
      startPosition++;
    }
    charSet.add(s[i]);
    max = Math.max(charSet.size, max);
  }
  return max;
};

console.log(lengthOfLongestSubstring("dvdfcdab"));
