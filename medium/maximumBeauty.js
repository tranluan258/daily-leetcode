/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 * @description my sol
 */
const maximumBeauty = (items, queries) => {
  items.sort((a, b) => a[0] - b[0]);
  const res = [];

  queries.forEach((q) => {
    let flag = 0;

    for (let idx = 0; idx < items.length; idx++) {
      if (items[idx][0] <= q && flag < items[idx][1]) {
        flag = items[idx][1];
      }
    }

    res.push(flag);
  });

  return res;
};

/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 * @description sol with nlog(n)
 */
var maximumBeautySol = function (items, queries) {
  const maxI = Number.MAX_SAFE_INTEGER;
  let res = [[0, 0, maxI]];

  items.sort((a, b) => a[0] - b[0]);

  for (let item of items) {
    let price = item[0];
    let beauty = item[1];
    let lastBracket = res.at(-1);

    if (beauty > lastBracket[1]) {
      res[res.length - 1][2] = price;
      res.push([price, beauty, maxI]);
    }
  }

  let ans = [];

  for (let x of queries) {
    for (let i = res.length - 1; i > -1; i--) {
      if (res[i][0] <= x) {
        ans.push(res[i][1]);
        break;
      }
    }
  }

  return ans;
};
