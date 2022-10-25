<?php

class Solution
{
    // Solution 1: Use hashing with sort()
    /**
     * @param String[] $strs
     * @return String[][]
     */
    // function groupAnagrams($strs)
    // {
    //     $map = [];
    //     $groupAnagrams = [];
    //     foreach ($strs as $str) {
    //         $strArray = str_split($str);
    //         sort($strArray);
    //         $sortedStr = implode($strArray);
    //         if (isset($map[$sortedStr])) {
    //             $map[$sortedStr][] = $str;
    //         } else {
    //             $map[$sortedStr] = [$str];
    //         }
    //     }
    //     foreach ($map as $item) {
    //         $groupAnagrams[] = $item;
    //     }
    //     return $groupAnagrams;
    // }

    //Solution 2: Use charCodeAt.
    function groupAnagrams($strs)
    {
        $charCodeOfA = ord('a');
        $map = [];
        $group = [];
        foreach ($strs as $key => $str) {
            $alphabetNumberArray = array_fill(0, 26, 0);
            for ($i = 0; $i < strlen($str); $i++) {
                $alphabetNumberArray[ord($str[$i]) - $charCodeOfA]++;
            }
            $alphabetNumberArrayStr = '';
            foreach ($alphabetNumberArray as $key1 => $value) {
                $alphabetNumberArrayStr .= $key1 . '=>' . $value . ',';
            }

            if (!array_key_exists($alphabetNumberArrayStr, $map)) {
                $map[$alphabetNumberArrayStr] = [$str];
            } else {
                $map[$alphabetNumberArrayStr][] = $str;
            }
        }
        foreach ($map as $item) {
            $group[] = $item;
        }
        return $group;
    }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution->groupAnagrams(
    ["abbbbbbbbbbb", "aaaaaaaaaaab"]
));
echo '</pre>';
die;
