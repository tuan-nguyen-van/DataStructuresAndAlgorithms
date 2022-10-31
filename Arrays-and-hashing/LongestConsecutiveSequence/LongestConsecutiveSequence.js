// https://leetcode.com/problems/longest-consecutive-sequence/
// Solution: The easiest solution is to use sorting the array but time complexity is O(nlogn)
// So we have to think of different way to do it. 
// For easier visualize how sorted array work we could use this graph
//    1, 2, 3, 4                    100                       200
//   /                             /                         /
// Nothing on the left      Nothing on the left      Nothing on the left
// <-------------------------------------------------------------------------->
// Each sequence (streak) start with the number that is not presented on the left. 
// So we could turn the original array into a Set or Hash Table with O(1) access time
// For each number $num we check the $num - 1 exists in the set.
// If it does not exist then we know it's a start of a sequence.
// Then we start the loop from $num++ until the $num++ does not in the set anymore
// The length of the sequence is the $lastNumber - $firstNumber.
// Then we compare the length with other sequence to get the biggest length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let biggest = 0;
  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let nextNum = num + 1;
      while (numsSet.has(nextNum)) {
        nextNum++;
      }
      const curMax = nextNum - num;
      biggest = Math.max(biggest, curMax);
    }
  }
  return biggest;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
