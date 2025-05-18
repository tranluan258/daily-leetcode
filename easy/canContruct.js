/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const magazineCount = {};

  for (const char of magazine) {
    magazineCount[char] = (magazineCount[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!magazineCount[char]) {
      return false;
    }
    magazineCount[char]--;
  }

  for (const char in magazineCount) {
    if (magazineCount[char] < 0) {
      return false;
    }
  }

  return true;
};
