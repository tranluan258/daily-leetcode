/*
 * @param {string[]} nums
 * @return {string}
 */
const findDifferentBinaryString = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i][i] === "0" ? result.push("1") : result.push("0");
  }
  return result.join("");
};
