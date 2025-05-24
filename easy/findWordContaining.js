/**
 * @param {string[]} words
 * @param {character} x
 * @description Finds the indices of words in the array that contain the character x.
 * @return {number[]}
 */
const findWordsContaining = (words, x) => {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      result.push(i);
    }
  }

  return result;
};
