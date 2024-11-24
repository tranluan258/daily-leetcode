/**
 * @param {number[][]} matrix
 * @return {number}
 * @description https://leetcode.com/problems/maximum-matrix-sum/?envType=daily-question&envId=2024-11-24
 */
const maxMatrixSum = (matrix) => {
  let absSum = 0;
  let negCount = 0;
  let absMin = Infinity;

  matrix.forEach((r) => {
    r.forEach((num) => {
      absSum += Math.abs(num);
      absMin = Math.min(absMin, Math.abs(num));
      if (num < 0) negCount++;
    });
  });

  return negCount % 2 === 1 ? absSum - 2 * absMin : absSum;
};
