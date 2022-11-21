/**
 * @param {string} s
 * @return {string}
 */
// With brute force solution:
// We have to check every possibility of any given character from 0 to string length.
// from left pointer is b and right pointer is d
// then b with a then b with b
// And each time we shift the pointer we need to check if is a Palindromic Substring
// So Moving through each char cause 0(n), shift pointer inward take O(n), then check is a palindromic take O(n)
// Brute force have solution is O(n^3)

// Smarter way to do it is have little trick with palindromic
// If the palindromic is bacab (length is odd) then we could start from
// the center char c then expand outward. First left and right position is at char c
// Then continue to expand outward as long as s[l] = s[r]

// If the palindramic stirng is baab or bb (even length) then we could have
// left position start from index of first a then right position start from index of second a.
// Then continue to expand outward by update left and right pointer as long as s[l] = s[r]

// Time complexity is O(n^2) with n is the length of the string. is not alway accurate but on average is O(n^2)
var longestPalindrome = function (s) {
  let result = "";
  let resultLength = 0;
  const length = s.length;
  for (let i = 0; i < length; i++) {
    // Check palindromic string length is odd
    let leftPointer = i,
      rightPointer = i;
    while (
      s[leftPointer] === s[rightPointer] &&
      rightPointer < length &&
      leftPointer >= 0
    ) {
      if (rightPointer - leftPointer + 1 > resultLength) {
        result = s.slice(leftPointer, rightPointer + 1);
        resultLength = rightPointer - leftPointer + 1;
      }
      rightPointer++;
      leftPointer--;
    }

    // Check palindromic string length is even
    leftPointer = i;
    rightPointer = i + 1;
    while (
      s[leftPointer] === s[rightPointer] &&
      leftPointer >= 0 &&
      rightPointer < length
    ) {
      if (rightPointer - leftPointer + 1 > resultLength) {
        result = s.slice(leftPointer, rightPointer + 1);
        resultLength = rightPointer - leftPointer + 1;
      }
      rightPointer++;
      leftPointer--;
    }
  }
  return result;
};

console.log(longestPalindrome("baabad"));
