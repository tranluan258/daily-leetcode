/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let unique = 0;

  for (let i = 0; i < nums.length; i++) {
    unique = unique ^ nums[i];
  }

  return unique;
};
