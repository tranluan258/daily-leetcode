/**
 * @param {string} word
 * @description link "https://leetcode.com/problems/string-compression-iii/description/?envType=daily-question&envId=2024-11-04"
 * @return {string}
 */
const compressedString = (word) => {
  let comp = "";
  let count = 1;
  let c = word[0];

  for (let i = 1; i < word.length; i++) {
    if (c === word?.[i] && count < 9) {
      count++;
    } else {
      comp += count.toString() + c;
      c = word[i];
      count = 1;
    }
  }

  comp += count.toString() + c;
  return comp;
};
