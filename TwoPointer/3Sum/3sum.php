<?php
class Solution
{
  function threeSum($nums)
  {
    sort($nums);
    $length = count($nums);
    $result = [];
    for ($i = 0; $i < $length; $i++) {
      if ($i > 0 && $nums[$i] === $nums[$i - 1]) {
        continue;
      }
      $startIndex = $i + 1;
      $endIndex = $length - 1;
      while ($startIndex < $endIndex) {
        $sum = $nums[$startIndex] + $nums[$endIndex];
        if ($sum > -$nums[$i]) {
          $endIndex--;
        } elseif ($sum < -$nums[$i]) {
          $startIndex++;
        } else {
          $result[] = [$nums[$i], $nums[$startIndex], $nums[$endIndex]];
          $endIndex = $length - 1;
          $startIndex++;
          while ($nums[$startIndex] === $nums[$startIndex - 1]) {
            $startIndex++;
          }
        }
      }
    }
    return $result;
  }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution->threeSum([-1, 0, 1, 2, -1, -4]));
echo '</pre>';
die;
