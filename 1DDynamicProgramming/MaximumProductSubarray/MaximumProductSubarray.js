/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution
// The brute force is we check every possibility like for array [2,3,-2,4]
// We check first nums [2], [2,3], [2,3,-2], [2,3,-2,4]
// Then 3 [3, -2], [3,-2,4] and so on and so forth.
// The time complexity for brute force is O(n^2)

// For linear solution. Just loop through the array one from 0 to length
// The trick here is two negative nums have product positive.
// So for each num of nums we need to keep track of the curMax and curMin of the current number
// To prepare for the next number (in 2 cases next number is positive or next number is negative)
// E.g array                       [-2, 0, -3, -2, -4, -6]
// Then the curMin for each num is  -2, 0, -3, -2, -24, -48
// Then the curMax for each num is  -2, 0, -3, 6, 8, 144

//Time is O(n) Space is O(1)
var maxProduct = function (nums) {
  let curMax = 1,
    curMin = 1;
  let result = nums[0];
  for (let num of nums) {
    const temp = curMax;
    curMax = Math.max(temp * num, curMin * num, num);
    curMin = Math.min(temp * num, curMin * num, num);
    result = Math.max(curMax, result);
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4]));
