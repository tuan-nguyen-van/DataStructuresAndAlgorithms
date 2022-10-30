<?php
class Solution
{

    /**
     * @param String[][] $board
     * @return Boolean
     */
    // function isValidSudoku($board)
    // {
    //   $boxes = [[], [], [], [], [], [], [], [], []];
    //   for ($i = 0; $i < 9; $i++) {
    //     $row = [];
    //     $col = [];
    //     for ($j = 0; $j < 9; $j++) {
    //       $rowVal = $board[$i][$j];
    //       if (isset($row[$rowVal])) return false;
    //       if ($rowVal !== '.') {
    //         $row[$rowVal] = true;
    //       }

    //       $colVal = $board[$j][$i];
    //       if (isset($col[$colVal])) return false;
    //       if ($colVal !== '.') {
    //         $col[$colVal] = true;
    //       }

    //       $boxVal = $board[$i][$j];
    //       $boxNumber = (int) floor($i / 3) * 3 + floor($j / 3);
    //       if (isset($boxes[$boxNumber][$boxVal])) return false;
    //       if ($boxVal !== '.') {
    //         $boxes[$boxNumber][$boxVal] = true;
    //       }
    //     }
    //   }
    //   return true;
    // }


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
    function isValidSudoku($board)
    {
        for ($i = 0; $i < 9; $i++) {
            $row = [];
            $col = [];
            $box = [];
            for ($j = 0; $j < 9; $j++) {
                $rowVal = $board[$i][$j];
                if (isset($row[$rowVal])) return false;
                if ($rowVal !== '.') {
                    $row[$rowVal] = true;
                }

                $colVal = $board[$j][$i];
                if (isset($col[$colVal])) return false;
                if ($colVal !== '.') {
                    $col[$colVal] = true;
                }

                $boxVal = $board[floor($i / 3) * 3 + floor($j / 3)][3 * ($i % 3) + $j % 3];
                if (isset($box[$boxVal])) return false;
                if ($boxVal !== '.') $box[$boxVal] = true;
            }
        }
        return true;
    }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution->isValidSudoku([
    ["5", "3", "", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]));
echo '</pre>';
die;
