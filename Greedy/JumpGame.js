/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution:
// With brute force we can use tree and caching for dynamic programming.
// With tricky solution:
// We can use reverse order.
// I.e:  2,   3,   1,   1,   4
// We start at the end of the array at index 4.
// At index 4, how can we go to index 3. by exactly 1 step. So we know that
// at index 3 can go to index 4. So we move the goal or the target to index 3.
// At index 3 as a goal. Index 2 can also do it with exact 1 step . so we move the target goal
// to index 2.
// At index 2. How can we go from index 1 to index 2. By 1 step. nums[1] == 3 is more than 1.
// So we can move the target goal to index 1.
// At index 1. Just need 1 step to move from index 0 to index 1 and nums[0] == 2 is enough.
// This case the result is true

// How about another case.
// [3, 2, 1, 0, 4]
// Start at the last position at index 4. How can we move from index 3 to index 4 is 1 step
// but the nums[3] == 0. So we cannot move the target to index 3.
// Next we check if index 2 can move to target at index 4. With 2 steps
// nums[2] == 1 < 2 so we cannot move to the target.
// Next we check if index 1 can move to target at index 4. With 3 steps.
// nums[1] = 2 < 3 so we cannot move to the target.
// Next we check if index 0 can move to target at index 4. With 4 steps.
// nums[0 = 3] < 4 so we cannot do it.
// This case is false.
// Time is O(n) Space is O(1)
var canJump = function (nums) {
  let targetIndex = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] >= targetIndex - i) {
      targetIndex = i;
    }
  }
  return targetIndex == 0 ? true : false;
};

console.log(canJump([3, 2, 1, 0, 4]));
