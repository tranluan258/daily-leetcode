/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const countFairPairs = (nums, lower, upper) => {
  nums.sort((a, b) => a - b);
  let ans = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const up = upperBound(nums, upper - v[i], i + 1);
    const low = lowerBound(nums, lower - v[i], i + 1);
    ans += up - low;
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const lowerBound = (nums, target, start) => {
  let end = nums.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return start;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
const upperBound = (nums, target, start) => {
  let end = nums.length;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > target) end = mid;
    else start = mid + 1;
  }
  return start;
};
