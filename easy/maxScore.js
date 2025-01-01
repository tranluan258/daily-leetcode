/**
 * @param {string} s
 * @return {number}
 */
const maxScore = (s) => {
  let zeroCount = s[0] === "0" ? 1 : 0;
  let oneCount = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "1") {
      oneCount++;
    }
  }
  let max = zeroCount + oneCount;
  for (let i = 1; i < s.length - 1; i++) {
    s[i] === "0" ? zeroCount++ : oneCount--;
    max = Math.max(max, oneCount + zeroCount);
  }

  return max;
};
