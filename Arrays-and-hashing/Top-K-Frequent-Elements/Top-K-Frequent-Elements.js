// https://leetcode.com/problems/top-k-frequent-elements/

//Solution : store the hask with the frequency of num in nums inside map object
// Store the frequency as key and num (of nums) as value inside bucket like this [4: 1, 3: 2, 1: 3] [...freq: num]

// Then we can loop through the bucket length from highest length - 1. 
//Then push the value of bucket to result.

// In this way the num with the most freq will be push to result first. 
//Until the result.length === k then break.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  const result = [];
  let bucket = [];
  for (let num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let [num, freq] of Object.entries(map)) {
    !bucket[freq] ? (bucket[freq] = [num]) : bucket[freq].push(num);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length >= k) break;
  }
  return result;
};

console.log(topKFrequent([1, 2], 2));
