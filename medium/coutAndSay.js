/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let tmp = "1";
  while (n > 1) {
    tmp = rle(tmp);
    n--;
  }

  return tmp;
};

/**
 * @param {string} s
 * @return {string}
 */
const rle = (s) => {
  if (s.length <= 1) {
    return "1" + s;
  }

  let count = 1;
  let res = "";

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      count++;
    } else {
      res += count.toString() + s[i];
      count = 1;
    }
  }

  res += count.toString() + s[s.length - 1];

  return res;
};
