<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer[]
     */
    function topKFrequent($nums, $k)
    {
        $frequencies = [];
        foreach ($nums as $num) {
            $frequencies[$num] = isset($frequencies[$num]) ? ++$frequencies[$num] : 1;
        }
        $frequenciesArray = [];
        $maxFrequency = 0;
        foreach ($frequencies as $num => $frequency) {
            isset($frequenciesArray[$frequency])
                ? $frequenciesArray[$frequency][] = $num
                : $frequenciesArray[$frequency] = [$num];
            $maxFrequency =  $frequency > $maxFrequency ? $frequency : $maxFrequency;
        }
        $result = [];
        for ($i = $maxFrequency; $i >= 0; $i--) {
            if (isset($frequenciesArray[$i])) {
                array_push($result, ...$frequenciesArray[$i]);
            }
            if (count($result) === $k) break;
        }

        return $result;
    }
}

$solution = new Solution();
echo '<pre>';
var_dump($solution->topKFrequent([1, 1, 1, 2, 2, 3],  2));
echo '</pre>';
die;
