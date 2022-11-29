/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// Solution use backtracking and depth first search like below.
// The word need to be search i.e: "abc"
// Loop through each element in the board and perform dfs for each element
//                            A
//                      /   /   \      \
//                    Top  Left   Right  Bottom
//                  Fal    Fal      B      S(fal)
//                             /   /   \  \
//                          T     L     R   B
//                         Fal  Fal      C    Fal
//                             A before   Tr
//                           gone through
var exist = function (board, word) {
  let result = false;
  const rowLength = board.length;
  const colLength = board[0].length;
  function dfs(r, c, i) {
    if (!result) {
      if (
        r >= rowLength ||
        c >= colLength ||
        r < 0 ||
        c < 0 ||
        board[r][c] != word[i]
      ) {
        return;
      }
      if (i == word.length - 1) {
        result = true;
        return;
      }

      board[r][c] = null;
      dfs(r + 1, c, i + 1);
      dfs(r - 1, c, i + 1);
      dfs(r, c + 1, i + 1);
      dfs(r, c - 1, i + 1);
      board[r][c] = word[i];
    }
  }

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (board[i][j] == word[0]) {
        dfs(i, j, 0);
        if (result) return result;
      }
    }
  }
  return result;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
