/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Solution:
// Case [5, 7, 7, 8, 8, 10] target 8
// Case [5, 7, 7, 8, 10] target 8
// Case [5, 7, 8, 8, 8, 8, 8, ... ,10, 12] target 8
// Case [5, 7, 8] target 6
// Case [] target any

// In case only have 1 target inside the array then the first and last
// target position is the same
// E.g [5, 7, 7, 8, 10] target 8 result is [3, 3]

// So we use binarySearch technique two time.
// First time to find the first target, second time is to find the last target
// we maintain the left, right and middle pointer.
// Loop while left >= right.
// if nums[middle] > target then right = middle - 1
// if nums[middle] < target then left = middle + 1.
// if nums[middle] = target then depend on the argument we should find first or last target
// if we find first then just log this index position then continue
// search on the left right = middle - 1
// If we find last target then just log this index position then continue
// search on the right.
var searchRange = function (nums, target) {
  const first = binSearch("first");
  const last = binSearch("last");

  return [first, last];
  function binSearch(firstOrLast) {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (nums[middle] > target) {
        right = middle - 1;
      } else if (nums[middle] < target) {
        left = middle + 1;
      } else {
        index = middle;
        if (firstOrLast == "first") {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
    }
    return index;
  }
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
