/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const rowNum = board.length;
  const colNum = board[0].length;
  // Capture unsurrounded regions and change O->U by dfs
  function captureUnsurrounded(r, c) {
    if (r == rowNum || r < 0 || c == colNum || c < 0 || board[r][c] !== "O")
      return;
    board[r][c] = "U";
    captureUnsurrounded(r + 1, c);
    captureUnsurrounded(r - 1, c);
    captureUnsurrounded(r, c + 1);
    captureUnsurrounded(r, c - 1);
  }
  // Run dfs for each element in the border of the board.
  for (let r = 0; r < rowNum; r++) {
    for (let c = 0; c < colNum; c++) {
      if (
        ([0, rowNum - 1].includes(r) || [0, colNum - 1].includes(c)) &&
        board[r][c] == "O"
      ) {
        captureUnsurrounded(r, c);
      }
    }
  }
  // Turn every O inside board to X only need to run inside the board perimeter.
  for (let r = 1; r < rowNum - 1; r++) {
    for (let c = 1; c < colNum - 1; c++) {
      if (board[r][c] === "O") board[r][c] = "X";
    }
  }

  // Turn every U inside board to O
  for (let r = 0; r < rowNum; r++) {
    for (let c = 0; c < colNum; c++) {
      if (board[r][c] === "U") board[r][c] = "O";
    }
  }

  return board;
};

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
