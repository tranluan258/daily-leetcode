/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = (arr) => {
  let max = -1;
  const m = {};
  for (let i = 0; i < arr.length; i++) {
    m[arr[i]] = (m[arr[i]] || 0) + 1;
  }
  for (const [key, value] of Object.entries(m)) {
    if (key == value && value > max) {
      max = value;
    }
  }

  return max;
};
