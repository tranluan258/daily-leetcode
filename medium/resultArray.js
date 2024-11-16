/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * @description https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/description/?envType=daily-question&envId=2024-11-16
 */
const resultsArray = (nums, k) => {
  const res = [];
  let left = 0;
  let consecCnt = 1;

  for (let right = 0; right < nums.length; right++) {
    if (right > 0 && nums[right - 1] + 1 === nums[right]) {
      consecCnt++;
    }

    if (right - left + 1 > k) {
      if (nums[left] + 1 === nums[left + 1]) {
        consecCnt--;
      }
      //inscrease left when subarry = k
      left++;
    }

    if (right - left + 1 === k) {
      //check sub array is conse
      res.push(consecCnt === k ? nums[right] : -1);
    }
  }

  return res;
};
