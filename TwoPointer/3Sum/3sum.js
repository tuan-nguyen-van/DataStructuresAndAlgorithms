// Solution:
// To counter duplicate problem we could use sorting.
// So if two number are duplicate then they will be next to each other.
// [-1, 0, -1, 4, 2, -4, 1, 2, -4]
// Sort the array to $sortedArray = [-4, -4, -1, -1, 0, 1, 2, 2, 4]
// So if we loop through the $sortedArray from 0 to lenth $num
// Then the problem now became the sum of two items with $sum = -$num.
// So we could use two pointers at $start and $end to solve two sum problem.
// if $start + $end > $sum then $increase the $start++.
// if $start + $end < $sum then $decrease the $end--.
// else return the answer.
// But we also need to check the duplicate problem with two sum by checking
// the previous number compare with the start.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  const result = [];
  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let startIndex = i + 1;
    let endIndex = length - 1;
    while (startIndex < endIndex) {
      const sum2 = nums[startIndex] + nums[endIndex];
      if (sum2 > -nums[i]) {
        endIndex--;
      } else if (sum2 < -nums[i]) {
        startIndex++;
      } else {
        result.push([nums[i], nums[startIndex], nums[endIndex]]);
        endIndex = length - 1;
        startIndex++;
        while (nums[startIndex] === nums[startIndex - 1]) {
          startIndex++;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]));
