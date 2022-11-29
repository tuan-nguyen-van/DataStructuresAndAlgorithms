/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Solution number 1: Use counter for the number of 0, 1, 2 and store them in memory
// Then loop array again to change the number.
// Time is O(n). Space is O(1).
// var sortColors = function (nums) {
//   counter = { 0: 0, 1: 0, 2: 0 };
//   for (let i = 0; i < nums.length; i++) {
//     counter[nums[i]]++;
//   }
//   let number = 0;
//   let i = 0;
//   while (number <= 2) {
//     if (counter[number] !== 0) {
//       nums[i] = number;
//       counter[number]--;
//       i++;
//     } else {
//       number++;
//     }
//   }
//   return nums;
// };

// console.log(sortColors([2, 0, 2, 1, 1, 0]));

// Solution number 2
// We use two pointer techniques
// [2, 0, 2, 1, 1, 0]
// Any number that is 0 will be positioned before leftPointer.
// Any number that is 1 will be positioned between leftPointer and rightPointer.
// Any number that is 2 will be positioned after rightPointer.
// We just loop through o to n and check the value at [i] and swap the position between
// nums[i] nums[leftPointer] nums[rightPointer] according to the number value.
var sortColors = function (nums) {
  const length = nums.length;
  let leftPointer = 0;
  let rightPointer = length - 1;
  for (let i = 0; i < length; i++) {
    if (i > rightPointer) {
      return nums;
    }
    if (nums[i] === 0) {
      const temp = nums[leftPointer];
      nums[leftPointer] = nums[i];
      nums[i] = temp;
      leftPointer++;
    } else if (nums[i] === 2) {
      const temp = nums[rightPointer];
      nums[rightPointer] = nums[i];
      nums[i] = temp;
      rightPointer--;
      // Edge Cases when nums[i] == 2 don't ship the pointer i
      // So we could take count of the [i] = temp instead of skipping it.
      i--;
    }
  }
};

console.log(sortColors([2,1,2]));
