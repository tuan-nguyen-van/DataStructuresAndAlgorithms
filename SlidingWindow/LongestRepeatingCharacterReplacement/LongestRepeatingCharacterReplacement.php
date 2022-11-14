<?php

class Solution
{
    //SOlution number 1.
    // /**
    //  * @param String $s
    //  * @param Integer $k
    //  * @return Integer
    //  */
    // function characterReplacement($s, $k)
    // {
    //     $charMap = [];
    //     $leftPointer = 0;
    //     $result = 0;
    //     for ($i = 0; $i < strlen($s); $i++) {
    //         $charMap[$s[$i]] = isset($charMap[$s[$i]]) ? $charMap[$s[$i]] + 1 : 1;
    //         while ($i - $leftPointer + 1 - max(array_values($charMap)) > $k) {
    //             $charMap[$s[$leftPointer]]--;
    //             $leftPointer++;
    //         }
    //         $result = max($result, $i - $leftPointer + 1);
    //     }
    //     return $result;
    // }



    // Solution number 2.
    // maintain the maxFrequency to move the left Pointer.
    function characterReplacement($s, $k)
    {
        $charMap = [];
        $leftPointer = 0;
        $result = 0;
        $maxFrequency = 0;
        for ($i = 0; $i < strlen($s); $i++) {
            $charMap[$s[$i]] = isset($charMap[$s[$i]]) ? $charMap[$s[$i]] + 1 : 1;
            $maxFrequency = max($maxFrequency, $charMap[$s[$i]]);
            while ($i - $leftPointer + 1 - $maxFrequency > $k) {
                $charMap[$s[$leftPointer]]--;
                $leftPointer++;
            }
            $result = max($result, $i - $leftPointer + 1);
        }
        return $result;
    }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution->characterReplacement("AABABBAD", 2));
echo '</pre>';
die;
