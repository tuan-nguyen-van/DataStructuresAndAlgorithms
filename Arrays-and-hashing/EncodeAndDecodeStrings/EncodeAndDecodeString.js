// Description
// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode

// Example
// Example1

// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]
// Explanation:
// One possible encode method is: "lint:;code:;love:;you"
// Example2

// Input: ["we", "say", ":", "yes"]
// Output: ["we", "say", ":", "yes"]
// Explanation:
// One possible encode method is: "we:;say:;:::;yes"

// Solution 1:
// The string could be any ASCII character so the if the delimiter is # or :;
// like we#say#:yes then what happen if inside the string have the delimiter
// like 'y#es' or 'y:;es' so we have to keep track the length of each string
// Ex: array like ["we", "say", ":", "yes"] then length = [2, 3, 1, 3].
// And we could not store the length inside length array because the decode
// function only accept string.

// So inorder to keep track of the length we could do something like store the
// length of every string before the string when encoding like this:
// 2we3say1:3yes but if we do like this what happen if inside string have number.
// We need a delimiter in order to prevent that.
// Let's say we add 2$we3$say1$:3$yes. So even if 2$ inside a string we still can keep track of
// The entire string because we stored the string length in front of the string.

//For decoding just check the interger infront of the $ sign then slice through the remained length
// for taking the original string.

/**
 * @param {string[]} strs
 * @return {string}
 */
var encode = (strs) => {
  return strs.map(str => str.length + "$" + str).join('');
};

/**
 * @param {string} str
 * @return {string[]}
 */
var decode = (str) => {
  const decodeArray = [];
  for (let i = 0; i < str.length; i++) {
    let length;
    if (str[i] === "$") {
      length = +str[i - 1];
      const subStr = str.slice(i + 1, i + 1 + length);
      i += length - 1;
      decodeArray.push(subStr);
    }
  }
  return decodeArray;
};

console.log(encode(["lint","code","love","you"]));
// We want output to become "4$lint4$code4$love3$you"
// console.log(decode(encode(["lint", "c4#ode", "love", "you"])));
