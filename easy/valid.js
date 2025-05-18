/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (s.length === 1) return false;

  let trackingOpenBrackets = [];
  const openBrackets = ["(", "[", "{"];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (openBrackets.includes(s[i])) {
      trackingOpenBrackets.push(s[i]);
      continue;
    }

    if (pairs[trackingOpenBrackets.pop()] !== s[i]) {
      return false;
    }
  }

  return trackingOpenBrackets.length === 0;
};
