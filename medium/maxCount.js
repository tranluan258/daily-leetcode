/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
const maxCount = (banned, n, maxSum) => {
  let count = 0;
  let sum = 0;
  const map = new Map();

  banned.forEach((b) => map.set(b, 1));

  for (let i = 1; i <= n; i++) {
    if (!map.has(i)) {
      sum += i;
      if (sum <= maxSum) {
        count++;
      } else {
        return count;
      }
    }
  }

  return count;
};
