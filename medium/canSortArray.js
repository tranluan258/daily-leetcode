/**
 * @param {number[]} nums
 * @return {boolean}
 * @description https://leetcode.com/problems/find-if-array-can-be-sorted/?envType=daily-question&envId=2024-11-06
 */
const canSortArray = (nums) => {
  let count = [];
  for (let j = 0; j < nums.length; j++) {
    count[j] = setBits(nums[j]);
  }

  let n = nums.length;
  let k = 0;
  while (k < n) {
    for (var i = 1; i < n; i++) {
      if (count[i] === count[i - 1] && nums[i] < nums[i - 1]) {
        var temp = nums[i];
        nums[i] = nums[i - 1];
        nums[i - 1] = temp;
      }
    }
    if (isSorted(nums)) {
      return true;
    }
    k++;
  }
  return false;
};

const setBits = (num) => {
  let count = 0;
  for (let i = 31; i >= 0; i--) {
    if (((num >> i) & 1) === 1) {
      count++;
    }
  }
  return count;
};

const isSorted = (nums) => {
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
};
