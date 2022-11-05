<?php
class Solution
{
    // /**
    //  * @param Integer[] $height
    //  * @return Integer
    //  */
    // function trap($height)
    // {
    //     $length = count($height);
    //     $maxLeft = [0];
    //     $maxRight = array_fill(0, $length, 0);
    //     $max = 0;

    //     for ($i = 1; $i < $length; $i++) {
    //         $max = max($height[$i - 1], $max);
    //         $maxLeft[$i] = $max;
    //     }

    //     $max = 0;

    //     for ($i = $length - 2; $i >= 0; $i--) {
    //         $max = max($height[$i + 1], $max);
    //         $maxRight[$i] = $max;
    //     }
    //     $trappingWater = 0;

    //     for ($i = 0; $i < $length; $i++) {
    //         $trappingWater += max(min($maxLeft[$i], $maxRight[$i]) - $height[$i], 0);
    //     }
    //     return $trappingWater;
    // }

    function trap($height)
    {
        $length = count($height);
        $maxLeft = $height[0];
        $maxRight = $height[$length - 1];
        $leftPointer = 0;
        $rightPointer = $length - 1;
        $trappingWater = 0;
        while ($leftPointer < $rightPointer) {
            if ($maxLeft < $maxRight) {
                $leftPointer++;
                $maxLeft = max($height[$leftPointer], $maxLeft);
                $trappingWater += $maxLeft - $height[$leftPointer];
            } else {
                $rightPointer--;
                $maxRight = max($height[$rightPointer], $maxRight);
                $trappingWater += $maxRight - $height[$rightPointer];
            }
        }
        return $trappingWater;
    }
}


$solution = new Solution();

echo '<pre>';
var_dump($solution->trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
echo '</pre>';
die;
