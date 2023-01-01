<?php
class Solution
{
  /**
   * @param Integer[] $nums
   * @param Integer $target
   * @return Integer
   */
  function searchInsert($nums, $target)
  {
    $left = 0;
    $right = count($nums) - 1;
    while ($left <= $right) {
      $middle = floor(($left + $right) / 2);
      if ($nums[$middle] === $target) {
        return $middle;
      } else if ($nums[$middle] > $target) {
        $right = $middle - 1;
      } else {
        $left = $middle + 1;
      }
    }
    return $left;
  }
}

$solution = new Solution;

echo '<pre>';
var_dump($solution->searchInsert([1, 3, 5, 6], 7));
echo '</pre>';
die;
