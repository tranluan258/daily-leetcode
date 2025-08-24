/**
 * @param {number[]} nums
 * @return {number}
 * @description To find the length of the longest subarray of 1's that can be obtained by deleting one element from the array.
 */
const longestSubarray = (nums) => {
  let countBeroreZero = 0;
  let countAfterZero = 0;

  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      countAfterZero++;
    } else {
      maxLength = Math.max(maxLength, countBeroreZero + countAfterZero);
      countBeroreZero = countAfterZero;
      countAfterZero = 0;
    }
  }

  maxLength = Math.max(maxLength, countBeroreZero + countAfterZero);

  return maxLength === nums.length ? maxLength - 1 : maxLength;
};
