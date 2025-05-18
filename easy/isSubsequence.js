/**
 * @param {string} s The string to check
 * @param {string} t The string to check against
 * @description This function checks if string s is a subsequence of string t.
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if (s.length > t.length) {
    return false;
  }

  let indexOfS = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[indexOfS]) {
      indexOfS++;
    }
  }

  return indexOfS === s.length;
};
