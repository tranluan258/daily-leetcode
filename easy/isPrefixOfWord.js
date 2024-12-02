/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 * @description https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/submissions/1468369058/?envType=daily-question&envId=2024-12-02
 */
const isPrefixOfWord = (sentence, searchWord) => {
  const arrSentences = sentence.split(" ");

  for (let i = 0; i < arrSentences.length; i++) {
    const prefix = arrSentences.at(i).substring(0, searchWord.length);
    if (prefix === searchWord) {
      return i + 1;
    }
  }

  return -1;
};
