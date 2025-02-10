/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const res = [];
  s.split("").forEach((char) => {
    if (char >= "0" && char <= "9") {
      res.pop();
    } else {
      res.push(char);
    }
  });
  return res.join("");
};
