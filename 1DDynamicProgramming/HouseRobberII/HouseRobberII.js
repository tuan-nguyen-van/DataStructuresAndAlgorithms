/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution .
// Check house robber 1
// In any given house we are considering rob or not rob
// It will be based on the max of (totalRobPrev1, totalRobPrev2 + currentHouse)

// So e.g [1,2,3,1] for house robber 2. It's a sub problem of house robber 1
// And we have to divide them into 2 cases rob first house or rob last house
// Then apply solution for house robber 1 for 2 new sub arrays like [1,2,3] and [2,3,1]
// The result is max of houseRober1([1starray], [2ndarray], nums[0]) nums of 0 incase the
// nums contains only 1 number.
//Time is O(N), space is O(1)
var rob = function (nums) {
  return Math.max(
    nums[0],
    houseRober1(nums.slice(1, nums.length)),
    houseRober1(nums.slice(0, -1))
  );
};

var houseRober1 = function (nums) {
  let totalRobPrev1 = 0,
    totalRobPrev2 = 0;
  for (let num of nums) {
    const maxRobAtCurrentHouse = Math.max(totalRobPrev1, totalRobPrev2 + num);
    totalRobPrev2 = totalRobPrev1;
    totalRobPrev1 = maxRobAtCurrentHouse;
  }
  return totalRobPrev1;
};

console.log(rob([1, 2, 3, 1]));
