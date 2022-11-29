/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// Solution we could use DPS for this problem and dynamic programming for caching.
// Time is O(2^n) and space is O(1).
// So it's not very efficient.

// Another solution is use little trick. We go in reverse order from the finish point to start point
// For 3x7 matrix we could draw the picture like this:
// We go from the finish to the top
// At any position [i,j] the total number of path from that position to reach the finish point
// is the sum of the right and the bottom positions.
// At the bottom row or the most right column we know that every position only have 1 path to reach the finished point
// So this is kind of the base case to this problem.
// Just loop through the second then the first row

// 28 21 15 19 6  3  1
// 7  6  5  4  3  2  1
// 1  1  1  1  1  1  0

var uniquePaths = function (m, n) {
  let result = 0;
  let lastRow = new Array(n).fill(1);
  // Loop through the bottom to the top.
  for (let i = m - 2; i >= 0; i--) {
    const newRow = new Array(n).fill(1);
    // Loop through right to left.
    for (let j = n - 2; j >= 0; j--) {
      newRow[j] = lastRow[j] + newRow[j + 1];
    }
    lastRow = newRow;
  }
  return lastRow[0];
};

console.log(uniquePaths(3, 7));
