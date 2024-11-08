/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 * @description https://leetcode.com/problems/maximum-xor-for-each-query/?envType=daily-question&envId=2024-11-08
 */
var getMaximumXor = function (nums, maximumBit) {
  const res = [];
  const max = (1 << maximumBit) - 1;
  let prefixXor;

  for (let i = 0; i < nums.length; i++) {
    if (prefixXor == undefined) {
      prefixXor = nums[i];
    } else {
      prefixXor = prefixXor ^ nums[i];
    }

    const k = prefixXor ^ max;

    if (k < Math.pow(2, maximumBit)) {
      res.push(k);
    }
  }

  return res.reverse();
};
