<?php

class Solution
{
    /** 
     * @var string[] $strs 
     * @return string
     */
    static function encode($strs) // Time is O(n) space is O(1)
    {
        return  join('', array_map(function ($str) {
            return strlen($str) . '$' . $str;
        }, $strs));
    }

    static function decode(string $str) // Time is O(*k) Space is O(n)
    {
        $decodeResult = [];
        for ($i = 0; $i < strlen($str); $i++) {
            if ($str[$i] === '$') {
                $len = (int) $str[$i - 1];
                $decodeResult[] = substr($str, $i + 1, $len);
                $i += $len - 1;
            }
        }
        return $decodeResult;
    }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution::decode($solution::encode(["lint", "code", "love", "you"])));
echo '</pre>';
die;