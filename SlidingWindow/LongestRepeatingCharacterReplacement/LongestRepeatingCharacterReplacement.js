/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// We calculate the result of each substring while looping from 0 to length.
// We keep track of each character frequency inside a map
// We track the substring by the left pointer.
// When the subStr length - the highest frequency inside the map >= k then
// we must move the left pointer to the next position for the substring to be valid.
// And decrease by 1 the frequency of the current char.
// Keep track of the maximum amount of result.
// The result could be calculated by the formular: curPointer - leftPointer + 1
// var characterReplacement = function (s, k) { Time is O(26n = n) Space is O(n)
//   const frequencyMap = {};
//   let result = 0;
//   let leftPointer = 0;
//   for (let i = 0; i < s.length; i++) {
//     frequencyMap[s[i]] = (frequencyMap[s[i]] || 0) + 1;
//     while (i - leftPointer + 1 - Math.max(...Object.values(frequencyMap)) > k) {
//       frequencyMap[s[leftPointer]]--;
//       leftPointer++;
//     }
//     result = Math.max(i - leftPointer + 1, result);
//   }
//   return result;
// };

// console.log(characterReplacement("AABABBAD", 2));

// Solution number 2.
// Just like solution number 1
// But we don't need to find the Math.max(...Object.values(frequencyMap) all the time
// Because we only need to check when the substring have maximum maxFrequency for char.
// So we just move the left pointer whenever the length - maxFrequency > k to find the
// substring that have maxFrequency to take the length as result.

var characterReplacement = function (s, k) {
  const frequencyMap = {};
  let result = 0;
  let leftPointer = 0;
  let maxFrequency = 0;
  for (let i = 0; i < s.length; i++) {
    frequencyMap[s[i]] = (frequencyMap[s[i]] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, frequencyMap[s[i]]);
    while (i - leftPointer + 1 - maxFrequency > k) {
      frequencyMap[s[leftPointer]]--;
      leftPointer++;
    }
    result = Math.max(i - leftPointer + 1, result);
  }
  return result;
};

console.log(characterReplacement("AABABBAD", 2));
