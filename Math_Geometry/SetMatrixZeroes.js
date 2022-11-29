/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Solution:
// I.e. We have a matrix 3x3 like below:
// we could keep track the appearance of 0 by have 1 more row and 1 more column.
// But this solution will cause O(m+n) for space complexity.
// So to have O(1) for space we need to move the tracking row and column inside the first row
// and the first column of the matrix. But the problem here is first row and first column intersect
// at the position [0,0] so we need to move the first index position of the first column outside and store
// it in a variable called firstColumnPos = 1;
// Then we could loop through the entire matrix mxn and whenever we meet 0 we change the value
// of the first row and first column to 0 at the according position.

// After keep track of the 0 we need to loop through the first row and first column then
// the firstColumnPos to change 0 of the entire row and columns accordingly.
//      0    0
//  0   0   1|0   1
//  0  1|0   0   1
//      1    1   1

var setZeroes = function (matrix) {
  let firstColumnPos = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        if (i === 0) {
          firstColumnPos = 0;
        } else {
          matrix[i][0] = 0;
        }
      }
    }
  }

  // First row and first column is used to store 0 already.
  // So we need to loop row and column from 1
  for (let k = 1; k < matrix.length; k++) {
    for (let l = 1; l < matrix[0].length; l++) {
      if (matrix[0][l] == 0 || matrix[k][0] == 0) {
        matrix[k][l] = 0;
      }
    }
  }

  // Replace the first column to 0 if matrix[0][0] == 0
  if (matrix[0][0] === 0) {
    for (let m = 1; m < matrix.length; m++) {
      matrix[m][0] = 0;
    }
  }
  // replace the first row to 0 if firstColumnPos == 0
  if (firstColumnPos === 0) {
    for (let n = 0; n < matrix[0].length; n++) {
      matrix[0][n] = 0;
    }
  }

  return matrix;
};

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
