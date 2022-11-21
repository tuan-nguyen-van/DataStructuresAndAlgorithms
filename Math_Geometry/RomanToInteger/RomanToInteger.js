/**
 * @param {string} s
 * @return {number}
 */
// Solution:
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Solution number 1:
// We could store the edge cases inside a map like this
// edgeCases = {IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900}
// We could loop from 0 to string length
// Then for each loop we check if the current char with the next char is inside the
// edgeCases. If existed then we add the number inside the edgeCases for 2 chars
// And increment the pointer by 1.
// Time is O(n) Space is O(1)
// var romanToInt = function (s) {
//   const romanSymbolValue = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   const edgeCases = {
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//   };
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] + s[i + 1] in edgeCases) {
//       result += edgeCases[s[i] + s[i + 1]];
//       i++;
//     } else {
//       result += romanSymbolValue[s[i]];
//     }
//   }
//   return result;
// };

// console.log(romanToInt("MCMXCIV"));

// Solution number 2:
// We traverse from back to front if the next roman char is less then the
// roman current char then we minus the next roman char
// Other wise plus the current char.

var romanToInt = function (s) {
  let result = 0;
  const romanSymbolValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = s.length - 1; i >= 0; i--) {
    if (romanSymbolValue[s[i]] > romanSymbolValue[s[i-1]]) {
      result += romanSymbolValue[s[i]] - romanSymbolValue[s[i-1]];
      i--;
    } else {
      result += romanSymbolValue[s[i]];
    }
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));

// Solution number 3
// replace the string
// search inside the string the whatever IV replace with IIII, IX replace with VIIII
// XL replace with XXXX, XC replace with LXXXX
// CD replace with CCCC, CM replace with DCCCC
// Then loop through the array then add all of them.
