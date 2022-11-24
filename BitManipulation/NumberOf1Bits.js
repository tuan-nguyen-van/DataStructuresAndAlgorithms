/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// Solution .
// We loop with a while loop until n is 0 (00000000) no 1 inside any more.
// We could shift the n right >> 1 by one
// Then we can use the % operator %2 to check if is 1 or 0.
// Then each iteration we just need to add result with n%2 result += n%2
var hammingWeight = function (n) {
  let result = 0;
  while (n != 0) {
    result += n&1;
    n = n >>> 1;
  }
  return result;
};

console.log(hammingWeight(00000000000000000000000000001011));
