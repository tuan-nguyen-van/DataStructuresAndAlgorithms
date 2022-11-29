/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Solution:
// draw a char like below to code the problem in case [1,2,3]
//                          holder array
//                           [], [1,2,3]
//                    /           |         \
//               [1],[2,3]   [2],[1,3]    [3],[1, 2]
//             /     |                         |      \
//      [1,2],[3]   [1,3],[2]               [3,1],[2] [3,2],[1]
//          |            |                     |          \
//    [1,2,3],[]     [1,3,2],[]             [3,1,2],[]    [3,2,1],[]

// Time O(n!) Space is O(n!)
const permute = function (nums) {
  const result = [];
  const holder = [];
  const length = nums.length;
  getPermutation(holder, nums);
  return result;
  function getPermutation(holder, array) {
    if (holder.length === length) {
      result.push([...holder]);
      return;
    }
    for (let i = 0; i < array.length; i++) {
      const temp = array[i];
      holder.push(array[i]);
      array.splice(i, 1);
      getPermutation(holder, array);
      holder.pop();
      array.splice(i, 0, temp);
    }
  }
};

console.log(permute([1, 2, 3]));
