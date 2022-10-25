// https://leetcode.com/problems/group-anagrams/
// Solution 1:
// We use hash table and sort()
// Loop through the strs array.
// For each item we sort it and push the sorted value to the map object like eat => {aet: ["eat"]}
// Each item we check if the sorted value inside the map object.
// If true then push to the map with key is sorted value.
// After the loop end we just get all the values from the map object

// Time is O(n * m(logm))
// Space is 0(n)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//   const map = {};
//   for (let str of strs) {
//     const sortedStr = [...str].sort().join(""); // Time is O(m + m*logm + m) = O(m*(2+ logm)) = O(mlogm) || Split cause Space O(n). Sort cause O(n) or 0(logn)
//     if (map[sortedStr]) {
//       //Space is O(n)
//       map[sortedStr].push(str);
//     } else {
//       map[sortedStr] = [str];
//     }
//   }
//   return Object.values(map); // Time is O(n) | Space is O(n)
// };

// 2nd solution
// Because the desciption have a constrain that say:
// strs[i] consists of lowercase English letters.
// So the charCodeAt(strs[i]) only consists of 26 letters in ASCII (97 to 122)
// So we could create an array consists of 26 items like [0,0...,0,0] to
// store the Ascii charCodeAt of a string
// represent all the letters inside any anagram strings together

// We loop through each string of strs. For each string we loop through each
// char then we can get the charCodeAt(str[i]) - charCodeAt('a'). Then we can store
// them inside the array at index [charCodeAt(str[i]) - charCodeAt('a')]++.
// Then we store the array inside the map object like this {charCodeArray[]: [str]}
// for the next item we check if the charCode array existed this new string of charCodeAt Item or not
// If existed we can push to the the array like this {charCodeArray[]: [str, str1, str2]}
// In the end we just return by looping through the values of the map object.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) { // Time is O(n*k) | Space is O(n*k)
  const charCodeOfA = "a".charCodeAt();
  const map = {}; // Space O(n)
  for (let str of strs) {
    const charCodeArray = new Array(26).fill(0);  // Space O(k)
    for (let i = 0; i < str.length; i++) {
      charCodeArray[str[i].charCodeAt() - charCodeOfA]++;
    }
    if (map[charCodeArray] !== undefined) {
      map[charCodeArray].push(str);
    } else {
      map[charCodeArray] = [str];
    }
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
