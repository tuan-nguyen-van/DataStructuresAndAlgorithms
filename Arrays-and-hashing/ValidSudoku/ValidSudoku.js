// Solution for rows and columns using brute force.
// Using hash map.
// For checking rows and cols.
// Nested loop with i from 0 to 9 and j from 0 to 9
// Then foreach item check inside the hash if the item is exist or not.
// If existed then return false.
// Otherwise push new item into the hash map then continue.

//For boxes: I is vertical axis and J is horizontal axis.
// 00 01 02 | 03 04 05 | 06 07 08
// 10 11 12 | 13 14 15 | 16 17 18  // Boxes 0, 1, 2
// 20 21 22 | 23 24 25 | 26 27 28
// ------------------------------
// 30 31 32 | 33 34 35 | 36 37 38
// 40 41 42 | 43 44 45 | 46 47 48  // Boxes 3, 4, 5
// 50 51 52 | 53 54 55 | 56 57 58
// ------------------------------
// 60 61 62 | 63 64 65 | 66 67 68
// 70 71 72 | 73 74 75 | 76 77 78  // Boxes 6, 7, 8
// 80 81 82 | 83 84 85 | 86 87 88

// For checking 3x3 boxes. we could get box's number by i, j.
// Boxes increase 3 steps at a time when i from 0 to 3 and from 3 to 6.
// And every 3 j steps will increase box number 1 time.
// So the formular for determining the box's no is: Math.floor(i/3)*3 + Math.floor(j/3).

// When looping through i, j we can use hash to store and checking the value already existed
// inside a box to check validity of the sudoku.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function (board) {
//   const boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
//   for (let i = 0; i < 9; i++) {
//     const row = {};
//     const col = {};
//     for (let j = 0; j < 9; j++) {
//       //Loop through each col
//       const boardJI = board[j][i];
//       if (col[boardJI]) return false;
//       if (boardJI !== ".") col[boardJI] = true;

//       const boardIJ = board[i][j];
//       //Loop through each row
//       if (row[boardIJ]) return false;
//       if (boardIJ !== ".") row[boardIJ] = true;

//       const boxNo = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//       if (boxes[boxNo][boardIJ]) return false;
//       if (boardIJ !== ".") boxes[boxNo][boardIJ] = true;
//     }
//   }
//   return true;
// };

// Second solution .
// for checking rows and cols just like solution 1.
// But for checking boxes validity I do differently.
// 00 01 02 | 03 04 05 | 06 07 08
// 10 11 12 | 13 14 15 | 16 17 18  // i is: 0, 1, 2
// 20 21 22 | 23 24 25 | 26 27 28
// ------------------------------
// 30 31 32 | 33 34 35 | 36 37 38
// 40 41 42 | 43 44 45 | 46 47 48  // i is: 3, 4, 5
// 50 51 52 | 53 54 55 | 56 57 58
// ------------------------------
// 60 61 62 | 63 64 65 | 66 67 68
// 70 71 72 | 73 74 75 | 76 77 78  // i is: 6, 7, 8
// 80 81 82 | 83 84 85 | 86 87 88

// i from 0 to 9 now represent the boxes number.
// For example if i is 5 and j from 0 to 9.
// We have to come up with a formular to access board[3->5][6->8] or board[y][x]
// board[3][6] when i is 5 and j is 0
// board[4][6] when i is 5 and j is 3
// board[5][6] when i is 5 and j is 6
// y = 3*(Math.floor(i/3)) + Math.floor(j/3)
// x = 3*(i%3) + j%3

var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const row = {};
    const col = {};
    const box = {};
    for (let j = 0; j < 9; j++) {
      //Loop through each col
      const boardJI = board[j][i];
      if (col[boardJI]) return false;
      if (boardJI !== ".") col[boardJI] = true;

      const boardIJ = board[i][j];
      //Loop through each row
      if (row[boardIJ]) return false;
      if (boardIJ !== ".") row[boardIJ] = true;

      const boxVal =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
      if (box[boxVal]) return false;
      if (boxVal !== ".") box[boxVal] = true;
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
