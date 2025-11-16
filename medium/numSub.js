/**
 * @param {string} s
 * @return {number}
 */
const numSub = (s) => {
  let count1 = 0;
  let total = 0;

  for (c of s) {
    if (c != 1) {
      total += countTotal(count1);
      count1 = 0;
    } else {
      count1++;
    }
  }

  if (count1 > 0) {
    total += countTotal(count1);
  }

  return total;
};

const countTotal = (count) => {
  let temp = 0;
  let step = 0;

  while (count > 0) {
    step++;
    temp += step;
    count--;
  }

  return temp;
};
