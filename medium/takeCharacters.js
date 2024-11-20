/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * @description https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/?envType=daily-question&envId=2024-11-20
 */
const takeCharacters = (s, k) => {
  //count preq char a,b,c
  const countChar = [0, 0, 0];
  for (let char of s) {
    countChar[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  //if one of char < k return n -1
  if (Math.min(...countChar) < k) {
    return -1;
  }

  let res = Infinity;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    countChar[s.charCodeAt(r) - "a".charCodeAt(0)]--;

    while (Math.min(...countChar) < k) {
      countChar[s.charCodeAt(l) - "a".charCodeAt(0)]++;
      l++;
    }
    res = Math.min(res, s.length - (r - l + 1));
  }
  return res;
};
