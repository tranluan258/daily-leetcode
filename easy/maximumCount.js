/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = (nums) => {
  const posCount = nums.length - binarySearch(nums, 1);
  const negCount = binarySearch(nums, 0);

  return Math.max(posCount, negCount);
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let result = nums.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }
  return result;
};
