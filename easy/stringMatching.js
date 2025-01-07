/**
 * @param {string[]} words
 * @return {string[]}
 */
const stringMatching = (words) => {
  const res = new Set();
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (
        i != j &&
        words[j].length > words[i].length &&
        words[j].includes(words[i])
      ) {
        res.add(words[i]);
      }
    }
  }

  return Array.from(res);
};
