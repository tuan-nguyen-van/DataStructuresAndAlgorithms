/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Solution: We have to write algorithm with time is O(logn) so
// The solution likely will be binary search.
// With binary search we have leftPointer, rightPointer, middle
// And we know that the original array nums before rotated is sorted so
// And we loop with condition left <= right
// if we divide them by two halves by the middle then one half must be sorted
// we check which side is sorted by compare nums[middle] with nums[start]
// Then
// if smallest <= target <= biggest then the target is here
// other wise target is on the other side
// Move the leftPointer or rightPointer accordingly.
var search = function (nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  while (leftPointer <= rightPointer) {
    let middle = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    // The sorted is on the left side
    if (nums[leftPointer] <= nums[middle]) {
      if (nums[leftPointer] === target) {
        return leftPointer;
      }
      // target is inside here
      if (nums[leftPointer] < target && target < nums[middle]) {
        rightPointer = middle - 1;
      } else {
        leftPointer = middle + 1;
      }
    } else { // The sorted is on the right side
      if (nums[rightPointer] === target) {
        return rightPointer;
      }
      // if target is inside
      if (nums[middle] < target && target < nums[rightPointer]) {
        leftPointer = middle + 1;
      } else {
        rightPointer = middle - 1;
      }
    }
  }
  return -1;
};

console.log(search([4,5,6,7,0,1,2], 3));
// console.log(search([4,5,6,7,0,1,2], 3));
// Another possible cases
// [6, 7, 1, 2, 3, 4, 5]