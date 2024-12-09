/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 * @description https://leetcode.com/problems/special-array-ii/description/?envType=daily-question&envId=2024-12-09
 */
const isArraySpecial = function (nums, queries) {
  const res = [];
  const n = nums.length;
  const prefix = Array(n).fill(0);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1];
    if ((nums[i - 1] + nums[i]) % 2 === 0) {
      prefix[i]++;
    }
  }
  for (let i = 0; i < queries.length; i++) {
    const [from, to] = queries[i];
    const specialCount = prefix[to] - (from > 0 ? prefix[from] : 0);
    res.push(specialCount === 0);
  }

  return res;
};
