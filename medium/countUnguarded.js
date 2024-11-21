/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 * #@description https://leetcode.com/problems/count-unguarded-cells-in-the-grid/?envType=daily-question&envId=2024-11-21
 */
const countUnguarded = function (m, n, guards, walls) {
  //initial grid
  const grid = Array(m)
    .fill()
    .map(() => Array(n).fill(0));

  guards.forEach((g) => {
    grid[g[0]][g[1]] = 2;
  });

  walls.forEach((w) => {
    grid[w[0]][w[1]] = 2;
  });

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  for (const [gx, gy] of guards) {
    for (const [dx, dy] of directions) {
      let x = gx;
      let y = gy;
      while (true) {
        x += dx;
        y += dy;
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 2) {
          break;
        }
        grid[x][y] = 1;
      }
    }
  }

  return grid.reduce(
    (sum, row) => sum + row.filter((cell) => cell === 0).length,
    0,
  );
};
