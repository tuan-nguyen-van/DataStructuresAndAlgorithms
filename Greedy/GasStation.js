/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// Solution:
// gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// The solution is guarentee to be unique so first we can check
// if the problem have a solution
// by minus the total amount of gas with the total cost. Total gas >= total cost
// to complete one circuit.

// Let minus the gas and the cost to see the different at each index.
// [-2, -2, -2, 3, 3].
// We can maintain the total at each index start from 0. The total is -2 so we cannot
// start at this position. We change index to 1 and total start again from 0.
// This time the total is still -2. So we move to the index 2 then index 3.
// At index 3 the total is 3 > 0 so we could set the result = index 3
// We continue to loop to the end of the array whenever the total < 0 we have to
// reset the result to the next index.
// At the end we just return the result. Because we already check that the solution
// is existed from the beginning.

var canCompleteCircuit = function (gas, cost) {
  // Check if the solution exist or not
  if (
    gas.reduce((sum, a) => sum + a, 0) < cost.reduce((sum, a) => sum + a, 0)
  ) {
    return -1;
  }
  // If the solution exist then check each index the difference between gas - cost
  let total = 0;
  let result = 0;
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    if (total < 0) {
      total = 0;
      result = i + 1;
    }
  }
  return result;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
