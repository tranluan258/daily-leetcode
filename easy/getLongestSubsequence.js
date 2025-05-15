/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
const getLongestSubsequence = (words, groups) => {
  let mark = groups[0];
  const res = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (mark != groups[i]) {
      res.push(words[i]);
      mark = groups[i];
    }
  }

  return res;
};
