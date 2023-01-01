<?php
class Solution
{
  function combinationSum($candidates, $target)
  {
    $result = [];
    $recurse = function ($i, $cur, $total) use (&$result, $target, $candidates, &$recurse) {
      if ($total === $target) {
        $result[] = [...$cur];
        return;
      }
      if ($i >= count($candidates) || $total > $target) {
        return;
      }
      $cur[] = $candidates[$i];
      $recurse($i, $cur, $total + $candidates[$i]);
      array_pop($cur);
      $recurse($i + 1, $cur, $total);
    };
    $recurse(0, [], 0);
    return $result;
  }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution->combinationSum([2, 3, 6, 7], 7));
echo '</pre>';
die;
