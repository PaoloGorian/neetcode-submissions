class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash = new Map();
        for (let i = 0; i < nums.length; i++) {
         if (hash.has(nums[i])) {
                return true;
    } else {hash.set(nums[i], 0)}   
        }
    return false;
    }
}
