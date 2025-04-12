/**
 * @param {string} s
 * @return {string}
 * @external https://leetcode.com/problems/reverse-words-in-a-string
 */
const reverseWords = (s) => {
  const words = s.split(" ");

  let reverseWords;
  for (let i = words.length - 1; i >= 0; i--) {
    const word = words[id].trim();
    if (word.length > 0) {
      reverseWords += word + " ";
    }
  }

  return words.trim();
};
