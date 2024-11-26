/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * @description https://leetcode.com/problems/find-champion-ii/submissions/1463349781/?envType=daily-question&envId=2024-11-26
 */
const findChampion = (n, edges) => {
  const player = Array(n).fill(true);

  edges.forEach((e) => {
    const [_, loser] = e;
    player[loser] = false;
  });

  let championCount = 0;
  let champion = -1;

  for (let i = 0; i < n; i++) {
    if (player[i]) {
      championCount++;
      champion = player[i];
    }
  }

  return championCount > 1 ? -1 : champion;
};
