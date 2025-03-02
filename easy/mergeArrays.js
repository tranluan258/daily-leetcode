/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
const mergeArrays = (nums1, nums2) => {
  const map = {};
  nums1.forEach((num) => {
    map[num[0]] = num[1];
  });

  nums2.forEach((num) => {
    if (map[num[0]]) {
      map[num[0]] += num[1];
    } else {
      map[num[0]] = num[1];
    }
  });

  const sortedKeys = Object.keys(map).sort((a, b) => a - b);

  return sortedKeys.map((key) => [parseInt(key), map[key]]);
};
