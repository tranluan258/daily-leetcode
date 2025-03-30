/*
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = (s) => {
  const lastOccurr = {};
  const res = [];
  let start = 0;
  let end = 0;

  // init the last occurrance of each character
  for (let i = 0; i < s.length; i++) {
    lastOccurr[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastOccurr[s[i]]);
    // if we reach the end of the current partition
    if (i === end) {
      res.push(end - start + 1);
      start = i + 1;
    }
  }
  return res;
};
