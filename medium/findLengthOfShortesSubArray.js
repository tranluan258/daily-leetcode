/**
 * @param {number[]} arr
 * @return {number}
 * @description https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/?envType=daily-question&envId=2024-11-15
 */
const findLengthOfShortestSubarray = (arr) => {
  const n = arr.length;

  // Step 1: mảng tăng dài nhất bên trái
  let left = 0;
  while (left + 1 < n && arr[left] <= arr[left + 1]) {
    left++;
  }

  //sorted
  if (left === n - 1) return 0;

  // Step 2: mảng tăng dài nhất bên phải
  let right = n - 1;
  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }

  let result = Math.min(n - left - 1, right);

  let i = 0;
  let j = right;
  while (i <= left && j < n) {
    if (arr[i] <= arr[j]) {
      result = Math.min(result, j - i - 1);
      i++;
    } else {
      j++;
    }
  }

  return result;
};
