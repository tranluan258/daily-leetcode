/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }

  let openCount = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(" || locked[i] === "0") {
      openCount++;
    } else {
      openCount--;
    }
    if (openCount < 0) {
      return false;
    }
  }

  let closeCount = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === ")" || locked[i] === "0") {
      closeCount++;
    } else {
      closeCount--;
    }
    if (closeCount < 0) {
      return false;
    }
  }

  return true;
};
