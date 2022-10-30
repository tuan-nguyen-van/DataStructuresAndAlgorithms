// Solution number 1.
// Ex: for array like [1, 2, 3, 4, 5, 7, 8]
// Then the product of 4 array[3] = (1x2x3)(left of 4) x (5x7x8)(right of 4)
// So we could create left array and right array with the same array size to store the
// left product and right product of each array item.
// Left [1, 1, 2, 6, 24, 120, 840]. Right [6720, 3360, 1120, 280, 56, 8, 1]
// Then in the end we just multiply 2 left array and right array to return;
// [6720, 3360, 2240, 1680, 1344, 960. 840]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Time is 0(n) space is also O(n)
// var productExceptSelf = (nums) => {
//   const leftProduct = [];
//   const rightProduct = [];
//   let product = 1;

//   for (let i = 0; i < nums.length; i++) {
//     leftProduct[i] = product;
//     product *= nums[i];
//   }

//   product = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     rightProduct[i] = product;
//     product *= nums[i];
//   }

//   for (let i = 0; i < nums.length; i++) {
//     rightProduct[i] *= leftProduct[i];
//   }

//   return rightProduct;
// };

// console.log(productExceptSelf([1, 2, 3, 4, 5, 7, 8]));

// Solution 2: The description require to do it in O(1) for space except the array return.
// So just follow the solution 1. We don't need to maintain the leftProduct and rightProduct
// Arrays. Just need to maintain the result array for each looping.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//Time is O(n) and Space is O(1) (except the result array return)
var productExceptSelf = (nums) => {
  const result = [];
  let product = 1;
  len = nums.length;
  for (let i = 0; i < len; i++) {
    result[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (let i = len - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
