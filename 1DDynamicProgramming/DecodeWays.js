/**
 * @param {string} s
 * @return {number}
 */

// Solution:
// This problem just like stair case problem with 1 or 2 jumps.

// Solved by dynamic programming like fibonacci sequence.
// I.e. We have this number string: 1 1 2 1 2 3 1 2.
// The number of ways at last index value 2 is
// 1st case: 2 stand alone: Number of decode way is number of decode ways of previous number (1)
// 2nd case: 2 combined with previous number: 12. Number of decode ways will need to add with
// number of decode ways of previous two number (3).
// There is no overlap here because.
//     ........3, 1, 2 (2 stand alone)
// And ........3, 12 (2 combined with 1)
// The last combination with 2 for 2 sets above is different, so 2 sets above
// is 2 different sets regardless of any kind of combinations before 3

// if first number is 0 then s is invalid we return 0;
// Every other case we loop through the string length and
// At index i if the number is more than 0 then we process to add number of ways of pre number.
// If the number at i is either 1 or (2  and previous number is inside range 0 to 6)
// then we need to add to current number of ways at index i
// with the total of ways of previous 2 index.
// The number of ways is the number of way at last index number.
// Time is O(n) space is O(n).

function numDecodings(s) {
  if (s[0] === "0") return 0;
  const decodeWays = { 0: 1 };
  for (let i = 1; i < s.length; i++) {
    decodeWays[i] = s[i] == "0" ? 0 : decodeWays[i - 1];

    if (s[i - 1] == 1 || (+s[i - 1] == 2 && +s[i] <= 6)) {
      if (i - 2 in decodeWays) {
        decodeWays[i] += decodeWays[i - 2];
      } else {
        decodeWays[i] = decodeWays[i] + 1 || 1;
      }
    }
  }
  return decodeWays[s.length - 1];
}

console.log(numDecodings("2301"));
