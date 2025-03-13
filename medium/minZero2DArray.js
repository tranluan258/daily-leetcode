/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
const minZeroArray = (nums, queries) => {
  let result = 0;

  for (let j = 0; j < queries.length; j++) {
    const [l, r, v] = queries[j];
    result++;
    for (let i = l; i <= r; i++) {
      nums[i] = nums[i] - v < 0 ? 0 : nums[i] - v;
    }

    if (!havePos(nums)) {
      return result;
    }
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const havePos = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return true;
  }

  return false;
};
