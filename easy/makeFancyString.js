/**
 * @param {string} s
 * @return {string}
 * @description https://leetcode.com/problems/delete-characters-to-make-fancy-string/?envType=daily-question&envId=2024-11-01
 */
const makeFancyString = (s) => {
  const arrString = s.split("");
  let count = 1;
  let prevS = arrString[0];

  for (let i = 1; i < arrString.length; i++) {
    if (arrString[i] == prevS) {
      count++;
    } else {
      count = 1;
      prevS = arrString[i];
    }

    if (count === 3) {
      arrString[i] = "";
      count--;
    }
  }

  return arrString.join("");
};
