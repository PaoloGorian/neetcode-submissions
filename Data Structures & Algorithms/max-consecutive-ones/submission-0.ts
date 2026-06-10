class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max = 0;
        let tempMax = 0;
        for (let i=0; i< nums.length; i++) {
            if (nums[i] === 1) {
                ++tempMax;
            }
            if (tempMax > max) {
                max = tempMax;
            }
            if (nums[i] === 0) {
                tempMax = 0;
            }
        }
        return max;
    }
}
