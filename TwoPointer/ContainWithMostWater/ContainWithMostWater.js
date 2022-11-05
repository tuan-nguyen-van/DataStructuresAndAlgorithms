// Solution 1: The easiest solution with O(n^2) is we check every possibility
// for each height. Each item we loop through every other items inside the array and get the
// volume then compare with the $max amount we keep track so far.

// The second solution is we use two pointer technique. Because we know if the width (distance)
// between two index bigger then it's  more likely contain more water.
// So we use one $left Pointer from 0 and $right pointer from the end.
// For each pair of pointers we calculate the volumn of water compare with the $max so far
// to keep track of the $max amount of water.

// How we move to the next pointer? We should move the $pointer with the height is lower and keep
// the pointer with the $height bigger to maximize the water volumn.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) { // Time is O(n). Space is O(1)
  const length = height.length;
  let max = 0;
  for (
    let leftPointer = 0, rightPointer = length - 1;
    leftPointer < rightPointer;

  ) {
    const waterVolumn =
      (rightPointer - leftPointer) *
      Math.min(height[leftPointer], height[rightPointer]);
    max = Math.max(max, waterVolumn);
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
