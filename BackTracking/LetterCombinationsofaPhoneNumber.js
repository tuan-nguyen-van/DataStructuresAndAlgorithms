/**
 * @param {string} digits
 * @return {string[]}
 */

// Solution : s: '23'
//                    .
//                 /  |  \
//2               a   b   c
//              / | \   / | \
//3            d  e  f d  e  f

// Time complexity is O(4^n) Space is O(4^n)
var letterCombinations = function (digits) {
  const result = [];
  const length = digits.length;
  // Create a map to map the digit with characters.
  charsMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function backtracking(digitIndex, curChar) {
    if (digitIndex == digits.length) {
      result.push(curChar);
      return;
    }
    const digitChars = charsMap[digits[digitIndex]];
    for (let i = 0; i < digitChars.length; i++) {
      backtracking(digitIndex + 1, curChar + digitChars[i]);
    }
  }

  if (digits.length) backtracking(0, "");
  return result;
};

console.log(letterCombinations("23"));
