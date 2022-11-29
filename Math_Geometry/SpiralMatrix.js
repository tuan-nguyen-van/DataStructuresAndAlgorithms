/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// Time is O(n*m) Space is O(1)
var spiralOrder = function (matrix) {
  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  debugger;
  while (left <= right && top <= bottom) {
    // Loop through the top border.
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    // Loop through the right border
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    // Prevent looping again.
    if (left > right || top > bottom) break;

    // Loop through the bottom border
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;
    // Loop through the left border
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]); 
    }
    left++;
  }
  return result;
};

console.log(
  spiralOrder([
    [2, 5, 8],
    [4, 0, -1],
  ])
);
