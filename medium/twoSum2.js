/**
 * @param {number[]} numbers
 * @param {number} target
 * @description To find two numbers in a sorted array that add up to a target value.
 * @return {number[]}
 */
const twoSum2 = (numbers, target) => {
  let left = 0;
  let rigth = numbers.length;

  while (left < rigth) {
    const sum = numbers[left] + numbers[rigth - 1];
    if (sum === target) {
      return [left + 1, rigth];
    } else if (sum < target) {
      left++;
    } else {
      rigth--;
    }
  }
  return [-1, -1];
};
