// function findMissingRanges(nums, lower, upper) {
//   const result = [];
//   const length = nums.length;
//   // First we compare the lower range with nums[0] and put it to the result first
//   // If the lower range is -5 and the nums[0] is 0 then we need to put "-5->-1" to the result
//   // [lower, nums[0]] = [0, 0] then we don't need to push any.
//   // [lower, nums[0]] = [-1, 0] then we only need to push "-1"
//   addRange(lower - 1, nums[0]);

//   // Loop inside the array from 0 to length - 1
//   // And compare the current value with the next value then push it to the result.
//   // If reach the end of the array then we compare the upper range with the last value
//   for (let i = 0; i < nums.length - 1; i++) {
//     addRange(nums[i], nums[i + 1]);
//   }

//   addRange(nums[length - 1], upper + 1);

//   return result;

//   function addRange(low, high) {
//     if (high - low > 2) {
//       result.push(`${low + 1}->${high - 1}`);
//     } else if (high - low == 2) {
//       result.push((low + 1).toString());
//     }
//   }
// }

//lintcode.com
// Time is O(n) Space is also O(n)
function findMissingRanges(nums, lower, upper) {
  const result = [];
  const length = nums.length;

  addRange(lower - 1, nums[0]);

  for (let i = 0; i < nums.length - 1; i++) {
    addRange(nums[i], nums[i + 1]);
  }

  addRange(nums[length - 1], upper + 1);

  return result;

  function addRange(low, high) {
    if (high - low > 2) {
      result.push(`${low + 1}->${high - 1}`);
    } else if (high - low == 2) {
      result.push((low + 1).toString());
    }
  }
}

// console.log(findMissingRanges([0, 1, 3, 50, 75], -5, 99));
// console.log(findMissingRanges([0, 1, 2, 3, 7], 0, 7));
// console.log(findMissingRanges([], 0, 7));