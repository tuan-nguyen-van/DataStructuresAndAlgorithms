<?php
class Solution
{

    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring($s)
    {
        $charSet = [];
        $startSubStringPosition = 0;
        $maxLength = 0;
        for ($i = 0; $i < strlen($s); $i++) {
            if (isset($charSet[$s[$i]])) {
                // use Max To prevent the $startSubString from going backward like inside "abba" if the end is a 
                // if we don't use max then the $startSubStringPosition is going back to 1;
                $startSubStringPosition = max($charSet[$s[$i]] + 1, $startSubStringPosition);
            }
            $charSet[$s[$i]] = $i;
            $maxLength = max($maxLength, $i - $startSubStringPosition + 1);
        }
        return $maxLength;
    }
}

$solution = new Solution();

echo '<pre>';
var_dump($solution->lengthOfLongestSubstring("abba"));
echo '</pre>';
die;
