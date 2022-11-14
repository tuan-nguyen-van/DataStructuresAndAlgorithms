/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// Solution:
// We create a hash table to store the count of char for string t.
// Like mapChar = { A: 1, B: 1, C: 1 }
// We maintain the countNeeds the record the number of conditions needing for the substring to be valid
// With t = "abc" then the countNeeds = 3 originally.
// We loop through the string s from left to right.
// We use slide window technique.
// First the left pointer is at index 0.
// Loop through each character .
// If the current char existed inside mapChar then we decrease the frequency of the
// char. Then we check the current char frequency inside the mapChar if the mapChar
// e.g A: 0 then the we have to minus the countNeeds because one char have met the condition
// If the countNeeds is 0 then we have to record the length of the string and compare with the
// maxLength var.
// Then we need to continue to find another string by increase the left pointer
// And record the mapChar, countNeeds so on and so forth. But only need to check
// the substring with the length < maxLength.

var minWindow = function (s, t) {
  const mapChars = {};
  t.split("").forEach((char) => {
    mapChars[char] = (mapChars[char] || 0) + 1;
  });
  let minStringLength = Infinity;
  let countNeeds = Object.keys(mapChars).length;
  let leftPointer = 0;
  let res = [0, -1];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in mapChars) {
      mapChars[s[i]]--;
      if (mapChars[s[i]] === 0) {
        countNeeds--;
      }
    }

    while (countNeeds === 0) {
      if (i - leftPointer + 1 < minStringLength) {
        minStringLength = i - leftPointer + 1;
        res = [leftPointer, i];
      }
      if (s[leftPointer] in mapChars) {
        mapChars[s[leftPointer]]++;
        if (mapChars[s[leftPointer]] > 0) {
          countNeeds++;
        }
      }
      leftPointer++;
    }
  }
  return s.slice(res[0], res[1] + 1);
};

// console.log(minWindow("ADAOBBECODEBANC", "ABC"));
console.log(minWindow("a", "aa"));
