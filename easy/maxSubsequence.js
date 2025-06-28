/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSubsequence = (nums, k) => {
  const copy = [];
  for (let i = 0; i < nums.length; i++) {
    copy.push({
      value: nums[i],
      index: i,
    });
  }

  copy.sort((a, b) => b.value - a.value);

  const topK = copy.slice(0, k);
  topK.sort((a, b) => a.index - b.index);

  for (let i = 0; i < k; i++) {
    result.push(topK[i].value);
  }
  return result;
};
