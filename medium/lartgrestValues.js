/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = (root) => {
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    let max = -Infinity;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      max = Math.max(max, curr.val);

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(root.right);
      }
    }

    res.push(max);
  }

  return res;
};
