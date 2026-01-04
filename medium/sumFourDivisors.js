/**
 * @param {number[]} nums
 * @return {number}
 */
const sumFourDivisors = (nums) => {
  let total = 0;
  for (let j = 0; j < nums.length; j++) {
    const num = nums[j];
    const result = new Set();
    result.add(1);
    result.add(num);

    let sum = 1 + num;

    for (let i = num - 1; i > 2; i--) {
      if (num % i === 0) {
        if (result.length === 4 && result.has(num / i)) {
          result.pop();
          break;
        }
        if (num / i != i) {
          result.add(i);
          result.add(num / i);
          sum += i;
          sum += num / i;
          break;
        }
      }
    }

    if (result.size === 4) {
      total += sum;
    }
  }

  return total;
};
