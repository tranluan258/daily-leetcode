/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function (arr) {
  let count = 0;
  for (let a of arr) {
    a % 2 === 1 ? count++ : (count = 0);
    if (count === 3) return true;
  }

  return false;
};
