<?php
// Solution: Because the array is already sorted.
// So we could use two pointers at beginning $start and at the end $end of the array.
// Then we use the condition $sum = $start + $end to move the pointers.
// If the $sum > $target then we have to reduce the $sum so we move the $end pointer
// to the left --. If $sum < $target we move the $start pointer to the right ++.
// If the $sum === $target then return the index of $start + 1, $end + 1.

class Solution
{
  function twoSum($numbers, $target)
  {
    $length = count($numbers);
    for ($i = 0, $j = $length - 1; $i < $j;) {
      $sum = $numbers[$i] + $numbers[$j];
      if ($sum > $target) $j--;
      elseif ($sum < $target) $i++;
      else return [$i + 1, $j + 1];
    }
  }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution->twoSum([2, 7, 11, 15], 9));
echo '</pre>';
die;
