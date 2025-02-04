class Solution {
    public int maxAscendingSum(int[] nums) {
        int max = 0;
        int sum = 0;
        int prev = 0;

        for (int num : nums) {
            if (num > prev) {
                sum += num;
            } else {
                max = Math.max(max, sum);
                sum = num;
            }
            prev = num;
        }

        return Math.max(max, sum);
    }
}

