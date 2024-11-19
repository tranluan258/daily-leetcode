/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @description my sol :https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/?envType=daily-question&envId=2024-11-19
 */
const maximumSubarraySum = (nums, k) => {
  let left = 0;
  let max = 0;
  while (left <= nums.length - k) {
    let right = left;
    let sum = 0;
    let map = {};
    for (let i = 0; i < k; i++) {
      if (map[nums[right]] !== undefined) {
        sum = 0;
        break;
      } else {
        map[nums[right]] = nums[right];
        sum += nums[right];
      }
      right++;
    }

    max = Math.max(max, sum);

    left++;
  }

  return max;
};

// sol resvole  time limit access
const maximumSubarraySum1 = function (nums, k) {
  let res = 0;
  const prevIdx = new Map(); // num -> prev index of num
  let curSum = 0;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    curSum += nums[r];

    const i = prevIdx.has(nums[r]) ? prevIdx.get(nums[r]) : -1;

    while (l <= i || r - l + 1 > k) {
      curSum -= nums[l];
      l++;
    }

    if (r - l + 1 === k) {
      res = Math.max(res, curSum);
    }

    prevIdx.set(nums[r], r);
  }

  return res;
};
