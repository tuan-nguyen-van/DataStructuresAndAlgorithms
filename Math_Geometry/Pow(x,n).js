/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// Solution:
//                      2^10
//                       |
//                     (2^5)^2
//                     /
//                  2*(2^2)^2
//                    /    \
//                (2^1)^2  (2^1)^2
//                /    |     |     \
//            2*2^0  2*2^0  2*2^0  2*2^0
// Time is O(n)
var myPow = function (x, n) {
  function helper(x, n) {
    if (n === 0) return 1;
    if (x === 0) return 0;
    return n % 2 === 0
      ? helper(x, n / 2) ** 2
      : x * helper(x, (n - 1) / 2) ** 2;
  }
  const res = helper(x, Math.abs(n));
  return n < 0 ? 1 / res : res;
};

console.log(myPow(2, -2));
