<?php
class Solution
{

    function productExceptSelf($nums)
    {
        $result = [];
        $product = 1;
        foreach ($nums as $key => $num) {
            $result[] = $product;
            $product *= $num;
        }
        $product = 1;
        for ($i = count($nums) - 1; $i >= 0; $i--) {
            $result[$i] *= $product;
            $product *= $nums[$i];
        }
        return $result;
    }
}

$solution = new Solution();
echo '<pre>';
var_dump($solution->productExceptSelf([1, 2, 3, 4]));
echo '</pre>';
die;
