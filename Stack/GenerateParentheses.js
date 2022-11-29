/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const parenthesisStack = [];

  function backtracking(openN, closeN) {
    debugger;
    if (openN === n && closeN === n) {
      result.push(parenthesisStack.join(""));
      return;
    }

    if (openN < n) {
      parenthesisStack.push("(");
      backtracking(openN+1, closeN);
      parenthesisStack.pop();
    }
    if (closeN < openN) {
      parenthesisStack.push(")");
      backtracking(openN, closeN+1);
      parenthesisStack.pop();
    }
  }

  backtracking(0, 0);
  return result;
};

console.log(generateParenthesis(3));
