/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 * @description https://leetcode.com/problems/defuse-the-bomb/?envType=daily-question&envId=2024-11-18
 */
const decrypt = function (code, k) {
  if (k === 0) {
    return Array(code.length).fill(0);
  }

  const res = [];
  let left = 0;
  let rigth;

  while (left < code.length) {
    let sum = 0;
    k > 0 ? (rigth = left + 1) : (rigth = left - 1);

    for (let i = 0; i < Math.abs(k); i++) {
      if (rigth === code.length) {
        rigth = 0;
        sum += code[rigth];
      } else if (rigth < 0) {
        rigth = code.length - 1;
        sum += code[rigth];
      } else {
        sum += code[rigth];
      }

      k > 0 ? rigth++ : rigth--;
    }

    res.push(sum);
    left++;
  }

  return res;
};
