<?php

class Solution
{
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function longestConsecutive($nums)
    {
        $numsSet = array_count_values($nums);
        $biggest = 0;
        foreach ($numsSet as $num => $count) {
            if (!isset($numsSet[$num - 1])) {
                $nextNum = $num + 1;  
                while (isset($numsSet[$nextNum])) {
                    $nextNum++;
                }
                $curLenth = $nextNum - $num;
                $biggest = max($biggest, $curLenth);
            }
        }
        return $biggest;
    }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution->longestConsecutive([100, 4, 200, 1, 3, 2, 1]));
echo '</pre>';
die;
