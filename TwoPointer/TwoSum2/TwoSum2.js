// Solution: Because the array is already sorted.
// So we could use two pointers at beginning $start and at the end $end of the array.
// Then we use the condition $sum = $start + $end to move the pointers.
// If the $sum > $target then we have to reduce the $sum so we move the $end pointer
// to the left --. If $sum < $target we move the $start pointer to the right ++.
// If the $sum === $target then return the index of $start + 1, $end + 1.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const length = numbers.length;
  for (let i = 0, j = length - 1; i < j; ) {
    const $sum = numbers[i] + numbers[j];
    if ($sum > target) j--;
    else if ($sum < target) i++;
    else return [i + 1, j + 1];
  }
  return false;
};

console.log(twoSum([2, 7, 11, 15, 17, 21], 38));
