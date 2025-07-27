/**
 * @param {number[]} nums
 * @return {number}
 */
const countHillValley = (nums) => {
  const filtered = [];
  // Filter out adjacent duplicates
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      filtered.push(nums[i]);
    }
  }

  let count = 0;
  for (let i = 1; i < filtered.length - 1; i++) {
    if (
      (filtered[i] > filtered[i - 1] && filtered[i] > filtered[i + 1]) ||
      (filtered[i] < filtered[i - 1] && filtered[i] < filtered[i + 1])
    ) {
      count++;
    }
  }

  return count;
};
