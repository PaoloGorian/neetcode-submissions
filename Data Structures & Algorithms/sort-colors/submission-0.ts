class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const counter = [0, 0, 0];
        for (let i = 0; i < nums.length; i++) {
            counter[nums[i]] += 1;
        }

        let index = 0;
        for (let i = 0; i < counter.length; i++) {
            for (let j = 0; j < counter[i]; j++) {
                nums[index] = i;
                index++;                
            }
        }
    }
}
