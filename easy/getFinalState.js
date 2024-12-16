/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
const getFinalState = (nums, k, multiplier) => {
  while (k > 0) {
    const minIndex = findMinIndex(nums);
    nums[minIndex] = nums[minIndex] * multiplier;
    k--;
  }

  return nums;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMinIndex = (nums) => {
  let min = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[min]) {
      min = i;
    }
  }

  return min;
};
