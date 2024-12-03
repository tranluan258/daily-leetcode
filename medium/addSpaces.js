/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 * @description https://leetcode.com/problems/adding-spaces-to-a-string/?envType=daily-question&envId=2024-12-03
 */
const addSpaces = (s, spaces) => {
  spaces.sort((a, b) => a - b);
  let res = "";
  let index = 0;
  let spacesIndex = spaces.pop();

  while (spaces.length >= 0 && index < s.length) {
    if (spacesIndex === index) {
      res += " ";
      res += s[index];
      spacesIndex = spaces.pop();
    } else {
      res += s[index];
    }
    index++;
  }

  if (index < s.length) {
    res += s.substring(index, s.length);
  }

  return res;
};
