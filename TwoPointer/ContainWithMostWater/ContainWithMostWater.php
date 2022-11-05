<?php
class Solution
{

    /**
     * @param Integer[] $height
     * @return Integer
     */
    function maxArea($height)
    {
        $max = 0;
        for (
            $leftPointer = 0, $rightPointer = count($height) - 1;
            $leftPointer < $rightPointer;
        ) {
            $waterVolume = ($rightPointer - $leftPointer)*min($height[$leftPointer], $height[$rightPointer]);
            if ($height[$leftPointer] < $height[$rightPointer]) {
                $leftPointer++;
            } else {
                $rightPointer--;
            }
            $max = max($max, $waterVolume);
        }
        return $max;
    }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution->maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
echo '</pre>';
die;
