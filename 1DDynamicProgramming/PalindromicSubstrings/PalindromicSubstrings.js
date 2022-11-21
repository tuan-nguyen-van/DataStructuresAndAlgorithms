/**
 * @param {string} s
 * @return {number}
 */
// Solution
// Loop through each char inside string then use the same technique
// as LongestPalindromicSubstring problem.
// We have two cases the substring length is odd and the substring length is even.
// Loop while still a valid palindromic string

//Time is O(n^2) Space is O(1)
var countSubstrings = function (s) {
  let count = 0;
  let length = s.length;
  for (let i = 0; i < length; i++) {
    // Check the odd case length for substring
    let leftPointer = i,
      rightPointer = i;
    count = countPalindromicAtChar(s, leftPointer, rightPointer, count);

    // Check the even case length for substring
    leftPointer = i;
    rightPointer = i + 1;
    count = countPalindromicAtChar(s, leftPointer, rightPointer, count);
  }
  return count;
};

var countPalindromicAtChar = function (s, leftPointer, rightPointer, count) {
  while (
    s[leftPointer] === s[rightPointer] &&
    leftPointer >= 0 &&
    rightPointer < s.length
  ) {
    count++;
    leftPointer--;
    rightPointer++;
  }
  return count;
};

console.log(countSubstrings("aabbabadddcd"));
