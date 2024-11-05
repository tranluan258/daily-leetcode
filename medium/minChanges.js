/**
 * @param {string} s
 * @returns {number}
 * @description https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/?envType=daily-question&envId=2024-11-05
 */
const minChanges = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i = i + 2) {
    if (s[i] != s[i + 1]) count++;
  }
  return count;
};
