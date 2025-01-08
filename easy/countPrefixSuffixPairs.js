/**
 * @param {string[]} words
 * @return {number}
 */
const countPrefixSuffixPairs = (words) => {
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    const s1 = words[i];
    for (let j = i + 1; j < words.length; j++) {
      const s2 = words[j];

      if (isPrefixAndSuffix(s1, s2)) {
        res++;
      }
    }
  }

  return res;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isPrefixAndSuffix = (s1, s2) => {
  if (!s2.startsWith(s1)) {
    return false;
  }

  if (!s2.endsWith(s1)) {
    return false;
  }

  return true;
};
