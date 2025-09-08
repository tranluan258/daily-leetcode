/**
 * @param {number} n
 * @return {number[]}
 */
const getNoZeroIntegers = (n) => {
  for (let i = 1; i < n; i++) {
    const isContainsZero =
      (n - i).toString().includes("0") || i.toString().includes("0");

    if (isContainsZero) {
      i++;
    } else {
      return [i, n - i];
    }
  }
};
