/**
 * @param {number[]} nums
 * @return {number}
 */

// Solution:
// The requirement is O(log n) for time
// So I only thinking about binary search technique (divide and conquer)
// We divide the array by half until left <= right is false
// we keep track of the Left, right, middle.
// If we divide the array by two then half is sorted and the other half is unsorted
// The condition for the left array is sorted is nums[middle] > nums[start]
// We keep track of the min.
// Min is min of (min, nums[middle])
// If the array is sorted then the min is min of (nums[left], min)
// If the array is unsorted then continue the next while loop by moving
// the left and the right pointer
// The edge cases is when the left pointer value < right pointer value
// That mean the array from left to right is already sorted so just
// compare the min result then break the loop.

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let min = Infinity;

  while (left <= right) {
    //Edge case the array from left to right is already sorted
    if (nums[left] < nums[right]) {
      min = Math.min(min, nums[left]);
      break;
    }

    let middle = Math.floor((left + right) / 2);
    min = Math.min(nums[middle], min);
    // The sorted part on the left
    if (nums[middle] >= nums[left]) {
      min = Math.min(nums[left], min);
      left = middle + 1;
    } else {
      // The sorted part on the right
      right = middle - 1;
    }
  }
  return min;
};

console.log(findMin([3, 4, 5, 1, 2]));
// console.log(findMin([3, 4, 5, 6, 7, 1, 2]));
// console.log(findMin([6, 7, 1, 2, 3, 4, 5]));
// console.log(findMin([5, 6, 7, 0, 1, 2, 3]));
// console.log(findMin([2, 1]));
// One case is     [3, 4, 5, 6, 7, 1, 2]
// Another case is [6, 7, 1, 2, 3, 4, 5]
// Another case is [5, 6, 7, 0, 1, 2, 3]
