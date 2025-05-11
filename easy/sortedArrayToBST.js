/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
  return toBST(nums, 0, nums.length - 1);
};

const toBST = (nums, start, end) => {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const node = new TreeNode(nums[mid]);

  node.left = toBST(nums, start, mid - 1);
  node.right = toBST(nums, mid + 1, end);

  return node;
};
