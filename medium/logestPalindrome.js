/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  const map = {};
  const mapWSameChar = {};
  let result = 0;
  words.forEach((w) => {
    const reverse = w[1] + w[0];
    if (w[0] === w[1]) {
      mapWSameChar[w] = mapWSameChar[w] ? mapWSameChar[w] + 1 : 1;
    } else if (map[w]) {
      result += 4;
      delete map[w];
    } else {
      map[reverse] = w;
    }
  });

  if (Object.keys(mapWSameChar).length > 0) {
    result += Math.max(...Object.values(mapWSameChar)) * 2;
  }

  return result;
};

/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindromeSol = function (words) {
  const map = new Map();

  for (let word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  let count = 0;
  let hasCenter = false;

  for (let [word, c] of map.entries()) {
    const rev = word[1] + word[0];

    if (word === rev) {
      count += Math.floor(c / 2) * 4;
      if (c % 2 === 1) {
        hasCenter = true;
      }
    } else if (map.has(rev)) {
      const pairs = Math.min(c, map.get(rev));
      count += pairs * 4;
      map.set(word, 0);
      map.set(rev, 0);
    }
  }

  if (hasCenter) {
    count += 2;
  }

  return count;
};
