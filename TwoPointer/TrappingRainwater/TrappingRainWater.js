// Solution number #1: Using hash table.
// For each array item, we could use maxLeft, maxRight to keep track
// of the maximum height for each item.
// Then for each item we know that the maximum amount of water the item can store
// is min(maxLeft, maxRight) - height[index].
// Then sum them all up to find the final result.

/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   //Time is O(n) Space is O(n)
//   const length = height.length;
//   const maxLeftArray = [0];
//   const maxRightArray = new Array(length).fill(0);
//   let maxLeft = 0;
//   let maxRight = 0;
//   let trappingWater = 0;

//   for (let i = 1; i < length; i++) {
//     maxLeft = Math.max(maxLeft, height[i - 1]);
//     maxLeftArray.push(maxLeft);
//   }

//   for (let i = length - 2; i >= 0; i--) {
//     maxRight = Math.max(maxRight, height[i + 1]);
//     maxRightArray[i] = maxRight;
//   }

//   for (let i = 1; i < length; i++) {
//     const currentTrappingWater =
//       Math.min(maxRightArray[i], maxLeftArray[i]) - height[i];
//     if (currentTrappingWater > 0) {
//       trappingWater += currentTrappingWater;
//     }
//   }

//   return trappingWater;
// };

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// Solution number 2: Using two pointers
// We use one leftPointer and rightPointer from start and end of the array.
// We keep track of the maxLeft and maxRight to calculate water trapped for each array item
// With the formular is min(maxLeft, maxRight) - height[i]
// When maxLeft < maxLeft we need to move the left pointer
// to maximize the amount of water is trapped.
// Else move the right pointer.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  //Time is O(n)
  const length = height.length;
  let leftPointer = 0,
    rightPointer = length - 1;
  let maxLeft = height[0],
    maxRight = height[length - 1],
    trappingWater = 0;
  while (leftPointer < rightPointer) {
    if (maxLeft < maxRight) {
      leftPointer++;
      maxLeft = Math.max(maxLeft, height[leftPointer]);
      trappingWater += maxLeft - height[leftPointer];
    } else {
      rightPointer--;
      maxRight = Math.max(maxRight, height[rightPointer]);
      trappingWater += maxRight - height[rightPointer];
    }
  }
  return trappingWater;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
