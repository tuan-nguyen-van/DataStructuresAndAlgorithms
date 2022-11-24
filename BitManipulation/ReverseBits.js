/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// Solution
// Case: 101011
// The description say length of binary string is 32 bits.
// Then we can loop i from 0 to 31
// First we can set the res is 0 (000000)
// Then we take each bit from the end of n is 1
// by n >> i then perform & operator with 1 (000001).
// So if the last bit is 1 the result $bit will be 000001.
// If last bit is 0 then the result $bit will be 000000
// We append to the result by perform the | operator with result | (bit << (31 - i))
// Time complexity is O(1) and space is O(1);
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    // take the i bit from the end then perform & with ...000001 
    // to obtain ...000000 or ...000001 as the i bit from the end of n.
    const bit = (n >> i) & 1;
    // Perform the OR | operator with result to append the bit
    // at index i position by shifting left bit (31 -i)
    result = result | (bit << (31 - i));
  }
  // For keeping the signedness of number. 
  return result >>> 0;  
};

console.log(reverseBits(4294967293));
