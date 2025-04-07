/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = (nums) => {
  nums.sort((a, b) => a - b);
  const total = nums.reduce((acc, num) => acc + num, 0);
  const targetSum = total / 2;

  if (total % 2 !== 0) return false;

  const dp = Array(targetSum + 1).fill(false);

  dp[0] = true;

  // Iterate through the numbers
  for (let i = 0; i < nums.length; i++) {
    for (let j = targetSum; j >= nums[i]; j--) {
      // Check if we can form the target sum with the current number
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }

  return dp[targetSum];
};
console.log(canPartition([1, 5, 11, 5])); // true
